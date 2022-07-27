import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return await prisma.multipleChoice.findFirst
  return await prisma.hearingTask.findFirst({
    where: { id: parseInt(event.context.params.id) },
    select: {
      area: true,
      difficulty: true,
      hint: true,
      question: true,
      answers: true,
      answersCorrect: true
    }
  });
});
