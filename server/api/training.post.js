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
  const [scoredS,totalS] = await shortText(body);
  const result = await prisma.trainingResults.create({
    data: {
      userId: 1,
      scored:scoredC+scoredM+scoredS,
      total:totalC+totalM+totalS,
      grade: 1.0,
      submissionId: submission.id
    }
  });
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

async function shortText (elements) {

  const items = [];

  elements.forEach((element) => {
    if (element[0].includes("shorttext")) {
      const name = element[0].replace("shorttext-", "");
      const index = name.substr(0, 1);
      const answerS = element[1].split(',')[0];
      if (typeof (items[index]) === "undefined") {
        items.splice(index, 0, { id: element[1], answer: answerS });
      } else {
        const obj = items[index];
        obj.answer.push(index.answerS);
        console.log(index);
      }
    }
  });
  console.log(items);
  const answers = await shortTextAnswers(items);
  let score = 0; let total = 0;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i].answerKeywords.split(",");
    for (let o = 0; o < answer.length; o++) {
      total = answer.length //total + 1;
      const a = answer[o];
      if (items[i].answer.toLowerCase().includes(a)) { score = score + 1; }
    }
  }
  return [score, total];
}
async function shortTextAnswers (items) {
  const results = [];
  items.forEach((i) => {
    results.push(prisma.shortText.findFirst({
      where: { id: parseInt(i.id) },
      select: { answerKeywords: true }
    }));
  });
  return await Promise.all(results);
}
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
