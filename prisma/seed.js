/* eslint-disable */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main () {
  await prisma.closedText.create({
    data: {
      title: "Allgemeine Fragen zu Thor",
      text: "Dies ist ein Text mit $$ Lücken. Die Lücken müssen vorher $$ werden.",
      answers: "diversen,befüllt"
    }
  });
  await prisma.closedText.create({
    data: {
      title: "Captain America: The First Avenger",
      text: "Im Jahr $$, während des Zweiten Weltkriegs, dringen Soldaten der Organisation $$, der Wissenschaftsdivision des Dritten Reichs, in die norwegische Stadt Tønsberg ein. In einem Kloster findet Johann Schmidt, ein mysteriöses, würfelförmiges Artefakt, das er als $$ bezeichnet. Dem Wissenschaftler Arnim Zola gelingt es, die Energien des Würfels zu bändigen und als Quelle für neuartige Energiewaffen zu nutzen.",
      answers: "1942,hydra,tesserakt"
    }
  });
  await prisma.multipleChoice.create({
    data: {
      question: "Welche der folgenden Superhelden traten im ersten Avengersfilm auf",
      answers : "Dr. Strange,Thor,Loki,Spiderman",
      answersCorrect: "false,true,true,false"
    }
  });
  await prisma.dragDrop.create({
    data: {
      title: "Drag & Drop: Sortieren Sie die folgenden Filme nach ihrem Erscheinungsjahr von alt nach neu"
    }
  });
  await prisma.TrainingSubmissionsDragDrop.create({
    data: {
      submission: "",
      solution:   "",
      everythingCorrect: false,  
      percentageCorrect: 0.0  
    }
  });
  await prisma.shortText.create({
    data: {
      title: "Bitte beantworten Sie die Frage in in eigenen Worten",
      question: "Nennen sie je 2 Stärken und 2 Schwächen von Iron Man. Begründe diese bitte kurz",
      answer: "Er alle wichtigen Eigenschaften, die ein richtiger Superheld braucht: Er kann fliegen, ist nahezu unverwundbar und kann ordentlich austeilen. Er ist arrogant, überheblich und egozentrisch. Das macht ihn verwundbar und oft unvorsichtig. Er bringt sich selbst und manchmal auch andere damit in Gefahr. Doch gerade diese Eigenschaften brechen das sonst manchmal so stereotype Muster des Superhelden auf",
      answerKeywords: "fliegen, unverwundbar, arrogant, überheblich, egozentrisch, verwundbar, intelligent, alkohol, true"
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
/* eslint-enable */
