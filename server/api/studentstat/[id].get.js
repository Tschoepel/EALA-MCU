import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return await prisma.trainingSubmissions.findMany({
    where: { userId: parseInt(event.context.params.id)},
    select:{
      id: true,
      userId: true,
      submission: true,
      correctionString: true,
      resultId: true,
      createdAt: true,
      result: true
    }
  });
});