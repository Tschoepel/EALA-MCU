import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // return event.context.params.id;
  const body = Array.from(await useBody(event));
  closedText(body);
  // const query = useQuery(event);
  // return { a: body.action, b: body.userId };
  // await prisma.statistics.create({
  //   data: {
  //     userId: body.userId,
  //     action: body.action,
  //     params: body.params
  //   }
  // });
  return { success: true };
});

function closedText (elements) {
  // const items = [];
  elements.forEach((element) => {
    // console.log(element);
    if (element[0].includes("closedtext")) {
      const name = element[0].replace("closedtext-", "");
      console.log(name);
    }
  });
}
