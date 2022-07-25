import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  return await prisma.closedText.findFirst({
    where: { id: parseInt(event.context.params.id) },
    select: {
      title: true,
      text: true,
      answers: true
    }
  });
});
