import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return await prisma.trainingResults.findMany({
    where: { userId: 1 },
    select:{
      id: true,
      scored: true,
      total: true,
      grade: true
    }
  });
});