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
      answerI : "Dr. Strange",
      answerICorrect: false,
      answerII : "Thor",
      answerIICorrect: true,
      answerIII : "Loki",
      answerIIICorrect: true,
      answerIV : "Spiderman",
      answerIVCorrect: false
    }
  });
  await prisma.dragDrop.create({
    data: {
      title: "Drag & Drop: Sortieren Sie die folgenden Filme nach ihrem Erscheinungsjahr von alt nach neu",
      texts: "Thor,Iron Man 2,Marvel's the Avengers,Doctor Strange",
      solution: "Iron Man 2,Thor,Marvel's the Avengers,Doctor Strange"
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
