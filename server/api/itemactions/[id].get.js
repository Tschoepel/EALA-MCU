import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  return await prisma.studentTrainingAction.findMany({
    where: { userID: 1 },
    select:{
        exercise:    true,
        userID:      true,
        itemType:    true,
        itemID:      true,
        answers:     true,
        correct:     true,
        started:     true,
        finished:    true,
        difficulty:  true,
        area:        true,
        score:       true,
        total:       true,
        keys:        true,
    }
  });
});