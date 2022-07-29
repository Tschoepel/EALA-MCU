import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// responsible for correcting and storing itemactions and exercise sheets

// stores exercise input in database
export default defineEventHandler(async (event) => {
  const body = Array.from(await useBody(event));
  const submission = await prisma.trainingSubmissions.create({
    data: {
      userId: 1,
      submission: JSON.stringify(body),
      correctionString: ""
    }
  });
  // calls function to grade and store item inputs
  const studentActions = await createStudentTrainingActions(body);
  await storeStudentActions(studentActions);
  // calls functions grade exercise
  const [scoredC,totalC, corrC] = await closedText(body);
  const [scoredM,totalM, corrM] = await multipleChoice(body);
  const [scoredI,totalI, corrI] = await imageSelection (body);
  const [scoredH,totalH, corrH] = await hearingTask (body);
  const [scoredS,totalS, corrS] = await shortText(body);
  // stores result in database
  const result = await prisma.trainingResults.create({
    data: {
      userId: 1,
      scored:scoredC+scoredM+scoredI+scoredH+scoredS,
      total:totalC+totalM+totalI+totalH+totalS,
      grade: 1.0,
      submissionId: submission.id

    }
  });
  await prisma.trainingSubmissions.update({
    where: {
      id: submission.id
    },
    data: {
      resultId: result.id,
      correctionString: corrC+corrM+corrI+corrH+corrS
    }
  });
  return { id: result.id, correctionString: corrC+corrM+corrI+corrH+corrS };
});
// function to store item actions in database
async function storeStudentActions(actions){
  actions.forEach( async (action) => {
    await $fetch("/api/studentaction", {
      method: "POST",
      body: action
    })
  });
}
// function to collect data for item actions
async function createStudentTrainingActions(elements){
  let actions = [];
  let object ={};
  let oldStarted = elements[0][0].split("-")[8];
  let noClosedTextFinished = true;
  let answersCorrectClosedText = "";
  let answersGivenClosedText = "";
  let ect = null;
  let uct = null;
  let ict = null;
  let idct = null;
  let cct = null;
  let sct = null;
  let fct = null;
  let dct = null;
  let arct = null;
  let kct = null;
  elements.forEach((item) => {
    if(item[0].includes("id")){
      const itemdata = item[0].split("-");
      const exercise = itemdata[6];
      const userID = 1;
      const itemType = itemdata[0];
      const itemID = (itemType === "shorttext") ? Array.from(item[0].split("-")[9])[0] : item[1].split(",")[0];
      const answers = (itemType === "closedtext") ? "" : (itemType === "shorttext") ? item[1].split(",") : item[1].split(",").slice(1);
      const correct = itemdata[7];
      const started = itemdata[8];
      const finished = oldStarted;
      oldStarted = started;
      const area = itemdata[3];
      const difficulty = itemdata[4];
      const keys ="[Empty]";
      if(itemType !== "closedtext") {
        const [score,total] = calculateScore(itemType, answers,correct);
        object = { exercise: exercise, userID: userID, itemType: itemType, itemID: itemID, answers: answers, correct: correct, started: started, finished: finished, difficulty:  difficulty,
          area: area, score: score, total: total, keys: keys};
        actions.push(object);
      } else {
        if(noClosedTextFinished) {
          noClosedTextFinished = false;
          answersCorrectClosedText = correct;
          ect = exercise;
          uct = userID;
          ict = itemType;
          idct = itemID;
          cct = correct;
          sct = started;
          fct = finished;
          dct = difficulty;
          arct = area;
          kct = keys;
        } else {
          let answersGivenUse= answersGivenClosedText.slice(0,-1);
          answersGivenClosedText = "";
          const [score,total] = calculateScore("closedtext", answersGivenUse, answersCorrectClosedText)
          object = { exercise: ect, userID: uct, itemType: ict, itemID: idct, answers: answersGivenUse.split(","), correct: cct, started: sct, finished: fct, difficulty:  dct,
            area: arct, score: score, total: total, keys: kct};
          actions.push(object);
          answersCorrectClosedText = correct;
          ect = exercise;
          uct = userID;
          ict = itemType;
          idct = itemID;
          cct = correct;
          sct = started;
          fct = finished;
          dct = difficulty;
          arct = area;
          kct = keys;
        }
      }  
    } else {
       answersGivenClosedText = answersGivenClosedText + item[1] + ",";
    }
    if (item === elements[elements.length-1]){
      answersGivenClosedText = answersGivenClosedText.slice(0,-1);
      const [score,total] = calculateScore("closedtext", answersGivenClosedText, answersCorrectClosedText)
      object = { exercise: ect, userID: uct, itemType: ict, itemID: idct, answers: answersGivenClosedText.split(","), correct: cct, started: sct, finished: fct, difficulty:  dct,
        area: arct, score: score, total: total, keys: kct};
      answersGivenClosedText = "";
      actions.push(object);
    }
  })
  return actions;
}
// function to calculate score of item actions
function calculateScore (itemtype, answers, correct){
  let total = 0; let score = 0;
  const correctList = correct.split(",");
  switch (itemtype){
    case "closedtext": for ( let i = 0; i < answers.split(",").length; i++) {
      total = total +1;
      score = (correctList[i].toLowerCase() === answers.split(",")[i].toLowerCase()) ? score = score + 1 :  score = 0;
    }
    return [score, total];
    case "hearingtask":
    case "imageselection":
    case "multiplechoice":  return (answers.every(element => { return correctList.includes(element);}) && correctList.every(element => {return answers.includes(element);})) ? [0,1] : [1,1];
    case "shorttext":
    default: 
    for ( let i = 0; i < correctList.length; i++) {
      if(answers.join().includes(correctList[i])) return [1,1];
    } 
    return [0,1];
  }
}
// function to evaluate short text items of exercise sheet
async function shortText (elements) {
  const items = [];
  let realIndex = 0;
  let currentIndex = 0;
  elements.forEach((element) => {
    if (element[0].includes("shorttext")) {
      let elementArray = element[0].split("-");
      items[realIndex] = {id: elementArray[9], answer: element[1], correct: elementArray[7]};
      currentIndex = realIndex;
      realIndex = realIndex +1;
    }
  });
  let scoreItem = 0;
  let score = 0; let corr = "";
  for (let i = 0; i < items.length; i++) {
    const answer = items[i].correct.split(",");
    corr = corr + "st"+items[i].id + "-";
    let scorePer = 1;
    for (let o = 0; o < answer.length; o++) {
      if (answer.length === 1) scorePer = 2;
      const a = answer[o];
      if (items[i].answer.toLowerCase().includes(a)) { scoreItem = scoreItem + scorePer; corr = corr + "true,"; }
      else { corr = corr + "false,";  }
    }
    if (scoreItem === 2) { score = score + 1; }
    corr = corr.slice(0,-1) + ";";
    scoreItem = 0;

  }
  return [Math.min(score,1), items.length, corr];
}
// function to evaluate closed text items of exercise sheet
async function closedText (elements) {
  const items = [];
  let realIndex = 0;
  let currentIndex = 0;
  elements.forEach((element) => {
    if (element[0].includes("closedtext")) {
      if (element[0].includes("id")) {
        items[realIndex] = {id: element[1], answers: [], correct: element[0].split("-")[7]};
        currentIndex = realIndex;
        realIndex = realIndex +1;
      } else {
        const obj = items[currentIndex];
        obj.answers.push(element[1]);
      }
    }
  });
  let scoreItem = 0;
  let score = 0; let total = 0; let corr = "";
  for (let i = 0; i < items.length; i++) {
    const answer = items[i].correct.split(",");
    corr = corr + "ct"+items[i].id + "-";
    for (let o = 0; o < answer.length; o++) {
      const a = answer[o];
      if (a.toLowerCase() === items[i].answers[o].toLowerCase()) { scoreItem = scoreItem + 1; corr = corr + "true,"; }
      else{corr = corr + "false,";}
    }
    total = total + 1;
    if (scoreItem == answer.length) score = score + 1;
    scoreItem = 0;
    corr = corr.slice(0,-1) + ";";
  }
  return [score, total,corr];
}
async function multipleChoice(elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("multiplechoice")) {
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      const correct = element[0].split("-")[7];
      const item = {
        id : id,
        answers : answers,
        correct: correct
      }
      items.push(item);

    }
  });
  let scoreItem = 0;
  let score = 0; let total = 0; let corr = "";
  for (let i = 0; i < items.length; i++) {
    corr = corr + "mc"+items[i].id + "-";
    const answer = items[i].correct;
    const given = items[i].answers.join();
    let o = 0;
    for (let k = 0; k < 4; k++) {
      o = o + 1;
      if ((answer.includes(o) && given.includes(o))|| (!answer.includes(o) && !given.includes(o))) { scoreItem = scoreItem + 1; corr = corr + "true,";}
      else { corr = corr + "false,";} 
    }
    if (scoreItem === 4) score = score + 1;
    total = total + 1;
    scoreItem = 0;
    corr = corr.slice(0,-1) + ";";
  }
  return [score, total,corr];
}
// function to evaluate image selection items of exercise sheet
async function imageSelection(elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("imageselection")) {
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      const correct = element[0].split("-")[7];
      const item = {
        id : id,
        answers : answers,
        correct: correct
      }
      items.push(item);
    }
  });
  let scoreItem = 0;
  let score = 0; let total = 0; let corr = "";
  for (let i = 0; i < items.length; i++) {
    corr = corr + "is"+items[i].id + "-";
    const answer = items[i].correct;
    const given = items[i].answers.join();
    let o = 0;
    for (let k = 0; k < 10; k++) {
      o = o + 1;
      if ((answer.includes(o) && given.includes(o))|| (!answer.includes(o) && !given.includes(o))) { scoreItem = scoreItem + 1; corr = corr + "true,";}
      else { corr = corr + "false,";} 
    }
    (scoreItem === 10) ? score = score + 1 : score = score;
    total = total + 1;
    scoreItem = 0;
    corr = corr.slice(0,-1) + ";";
  }
  return [score, total,corr];
}
// function to evaluate hearing task items of exercise sheet
async function hearingTask (elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("hearingtask")) {
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      const correct = element[0].split("-")[7];
      const item = {
        id : id,
        answers : answers,
        correct : correct
      }
      items.push(item);
    }
  });
  let scoreItem = 0;
  let score = 0; let total = 0; let corr = "";
  for (let i = 0; i < items.length; i++) {
    corr = corr + "ht"+items[i].id + "-";
    const answer = items[i].correct;
    const given = items[i].answers.join();
    let o = 0;
    for (let k = 0; k < 5; k++) {
      o = o + 1;
      if ((answer.includes(o) && given.includes(o))|| (!answer.includes(o) && !given.includes(o))) { scoreItem = scoreItem + 1; corr = corr + "true,";}
      else { corr = corr + "false,";} 
    }
    (scoreItem === 5) ? score = score + 1 : score = score;
    total = total + 1;
    scoreItem = 0;
    corr = corr.slice(0,-1) + ";";
  }
  return [score, total,corr];
}

