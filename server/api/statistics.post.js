import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  const body = await useBody(event);
  // const query = useQuery(event);
  // return { a: body.action, b: body.userId };
  await prisma.statistics.create({
    data: {
      userId: body.userId,
      action: body.action,
      params: body.params
    }
  });
  return { success: true };
});
