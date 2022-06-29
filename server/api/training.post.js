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
  const [scored, total] = await closedText(body);
  const result = await prisma.trainingResults.create({
    data: {
      userId: 1,
      scored,
      total,
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
