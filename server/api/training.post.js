import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  const body = Array.from(await useBody(event));
  // console.log(body);
  const submission = await prisma.trainingSubmissions.create({
    data: {
      userId: 1,
      submission: JSON.stringify(body)
    }
  });
  const [scoredC,totalC] = await closedText(body);
  const [scoredM,totalM] = await multipleChoice(body);
  const [scoredI,totalI] = await imageSelection (body);
  const [scoredH,totalH] = await hearingTask (body);
  const result = await prisma.trainingResults.create({
    data: {
      userId: 1,
      scored:scoredC+scoredM+scoredI+scoredH,
      total:totalC+totalM+totalI+totalH,
      grade: 1.0,
      submissionId: submission.id
    }
  });
  console.log(result);
  await prisma.trainingSubmissions.update({
    where: {
      id: submission.id
    },
    data: {
      resultId: result.id
    }
  });
  return { id: result.id };
});

async function closedText (elements) {
  const items = [];
  elements.forEach((element) => {
    if (element[0].includes("closedtext")) {
      const name = element[0].replace("closedtext-", "");
      const index = name.substr(0, 1);
      if (typeof (items[index]) === "undefined") {
        items.splice(index, 0, { id: element[1], answers: [] });
      } else {
        const obj = items[index];
        obj.answers.push(element[1]);
      }
    }
  });
  console.log(items);
  const answers = await closedTextAnswers(items);
  console.log(answers);
  let score = 0; let total = 0;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i].answers.split(",");
    for (let o = 0; o < answer.length; o++) {
      total = total + 1;
      const a = answer[o];
      if (a.toLowerCase() === items[i].answers[o].toLowerCase()) { score = score + 1; }
    }
  }
  return [score, total];
}
async function closedTextAnswers (items) {
  const results = [];
  items.forEach((i) => {
    results.push(prisma.closedText.findFirst({
      where: { id: parseInt(i.id) },
      select: { answers: true }
    }));
  });
  return await Promise.all(results);
}
async function multipleChoice(elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("multiplechoice")) {
      const answersBoolean = ["false", "false", "false", "false"];
      const name = element[0].replace("multiplechoice-", "");
      const index = name.substr(0, 1);
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      for(let i = 0; i <answers.length;i++){
        switch(answers[i]){
          case "answer1": answersBoolean[0] = "true";break;
          case "answer2": answersBoolean[1] = "true";break;
          case "answer3": answersBoolean[2] = "true";break;
          case "answer4": answersBoolean[3] = "true";break;
        }
      }
      const item = {
        id : id,
        answers : answersBoolean
      }
      items.push(item);
    }
  });
  const answers = await multipleChoiceAnswers(items);
  let score = 0; let total = 0;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i].answersCorrect.split(",");
    for (let o = 0; o < answer.length; o++) {
      total = total + 1;
      const a = answer[o];
      if (a.toLowerCase() === items[i].answers[o].toLowerCase()) { score = score + 1; }
    }
  }
  return [score, total];
}
async function multipleChoiceAnswers (items) {
  const results = [];
  items.forEach((i) => {
    results.push(prisma.multipleChoice.findFirst({
      where: { id: parseInt(i.id) },
      select: { answersCorrect: true }
    }));
  });
  return await Promise.all(results);
}

async function imageSelection(elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("imageselection")) {
      const answersBoolean = ["false", "false", "false", "false", "false", "false", "false", "false", "false", "false"];
      const name = element[0].replace("imageselection-", "");
      const index = name.substr(0, 1);
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      for(let i = 0; i <answers.length;i++){
        switch(answers[i]){
          case "answer1": answersBoolean[0] = "true";break;
          case "answer2": answersBoolean[1] = "true";break;
          case "answer3": answersBoolean[2] = "true";break;
          case "answer4": answersBoolean[3] = "true";break;
          case "answer5": answersBoolean[4] = "true";break;
          case "answer6": answersBoolean[5] = "true";break;
          case "answer7": answersBoolean[6] = "true";break;
          case "answer8": answersBoolean[7] = "true";break;
          case "answer9": answersBoolean[8] = "true";break;
          case "answer10": answersBoolean[9] = "true";break;
        }
      }
      const item = {
        id : id,
        answers : answersBoolean
      }
      items.push(item);
    }
  });
  console.log(items);
  const answers = await imageSelectionAnswers(items);
  console.log(answers);
  let score = 0; let total = 1;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i].answersCorrect.split(",");
    for (let o = 0; o < answer.length; o++) {
      const a = answer[o];
      if (a.toLowerCase() === items[i].answers[o].toLowerCase()) { score = score + 1; }
    }
  }
  return [score, total];
}
async function imageSelectionAnswers (items) {
  const results = [];
  items.forEach((i) => {
    results.push(prisma.imageSelection.findFirst({
      where: { id: parseInt(i.id) },
      select: { answersCorrect: true }
    }));
  });
  return await Promise.all(results);
}
async function hearingTask (elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("hearingtask")) {
      const answersBoolean = ["false", "false", "false", "false", "false"];
      const name = element[0].replace("hearingtask-", "");
      const index = name.substr(0, 1);
      const id = element[1].split(',')[0];
      const answers = element[1].split(',').slice(1);
      for(let i = 0; i <answers.length;i++){
        switch(answers[i]){
          case "answer1": answersBoolean[0] = "true";break;
          case "answer2": answersBoolean[1] = "true";break;
          case "answer3": answersBoolean[2] = "true";break;
          case "answer4": answersBoolean[3] = "true";break;
          case "answer5": answersBoolean[4] = "true";break;
        }
      }
      const item = {
        id : id,
        answers : answersBoolean
      }
      items.push(item);
    }
  });
  const answers = await hearingTaskAnswers(items);
  let score = 0; let total = 0;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i].answersCorrect.split(",");
    for (let o = 0; o < answer.length; o++) {
      total = total + 1;
      const a = answer[o];
      if (a.toLowerCase() === items[i].answers[o].toLowerCase()) { score = score + 1; }
    }
  }
  return [score, total];
}
async function hearingTaskAnswers (items) {
  const results = [];
  items.forEach((i) => {
    results.push(prisma.hearingTask.findFirst({
      where: { id: parseInt(i.id) },
      select: { answersCorrect: true }
    }));
  });
  console.log(results);
  return await Promise.all(results);
}
