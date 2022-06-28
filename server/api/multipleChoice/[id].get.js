import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return await prisma.multipleChoice.findFirst
  return await prisma.multipleChoice.findFirst({
    where: { id: parseInt(event.context.params.id) },
    select: {
      question: true,
      answerI: true,
      answerICorrect: true,
      answerII: true,
      answerIICorrect: true,
      answerIII: true,
      answerIIICorrect: true,
      answerIV: true,
      answerIVCorrect: true
    }
  });
});
