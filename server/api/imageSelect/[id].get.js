import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return await prisma.multipleChoice.findFirst
  return await prisma.imageSelection.findFirst({
    where: { id: parseInt(event.context.params.id) },
    select: {
      question: true,
      answers: true,
    }
  });
});
