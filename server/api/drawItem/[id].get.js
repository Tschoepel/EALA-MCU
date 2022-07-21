import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  return await prisma.drawItem.findFirst({
    where: { id: parseInt(event.context.params.id) },
    select: {
      question: true
    }
  });
});
