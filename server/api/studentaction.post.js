import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  const action = await useBody(event);
  // const query = useQuery(event);
  // return { a: body.action, b: body.userId };
  await prisma.studentTrainingAction.create({
    data: {
      exercise:    parseInt(action.exercise),
      userID:      action.userID,
      itemType:    action.itemType,
      itemID:      parseInt(action.itemID),
      answers:     action.answers.join(),
      correct:     action.correct,
      started:     new Date(),
      finished:    new Date(),
      difficulty:  action.difficulty,
      area:        action.area,
      score:       action.score,
      total:       action.total,
      keys:        action.keys
    } 
  });
  return { success: true };
});
