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
      question: "Welche der folgenden Superhelden traten im ersten Avengersfilm auf?",
      answers : "Dr. Strange,Thor,Loki,Spiderman",
      answersCorrect: "false,true,true,false"
    }
  });
  await prisma.hearingTask.create({
    data: {
      question: "Aus welchem Film ist dieser Ausschnitt?",
      answers : "Black Widow,Iron Man 2,Thor: The Dark Kingdom, Thor: Tag der Entscheidung,Iron Man",
      answersCorrect: "false,false,true,false,false"

    }
  });
  await prisma.multipleChoice.create({
    data: {
      question: "Welche der folgenden Infinity-Steine gibt es nicht?",
      answers : "Zeistein, Geiststein, Gedankenstein, Raumstein",
      answersCorrect: "false,true,false,false"

    }
  });
  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Falcon?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "true,false,false,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Clint Barton?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,true,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Tony Stark?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,true,false,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Natasha Romanoff?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,true,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Captain America?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,true,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Peter Quill?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,true,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Thor?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,true,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Gamora?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,false,false,true"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Wenwu?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,false,true,false"
    }
  });

  await prisma.hearingTask.create({
    data: {
      question: "Aus welchem Film ist dieser Ausschnitt?",
      answers : "Black Widow,Iron Man 2,Thor: The Dark Kingdom,Thor:Tag der Entscheidung,The Avengers",
      answersCorrect: "false,false,false,false,true"
    }
  });

  await prisma.dragDrop.create({
    data: {
      title: "Drag & Drop: Sortieren Sie die folgenden Filme nach ihrem Erscheinungsjahr von alt nach neu"
    }
  });
  await prisma.shortText.create({
    data: {
      title: "Bitte beantworten Sie die Frage in in eigenen Worten",
      question: "Nennen sie je 2 Stärken und 2 Schwächen von Iron Man. Begründe diese bitte kurz",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "fliegen, unverwundbar, arrogant, überheblich, egozentrisch, verwundbar, intelligent, alkohol, true",
      videoExists: false
    }
  });
  await prisma.shortText.create({
    data: {
      title: "Bitte beantworten Sie die Frage in in eigenen Worten",
      question: "Um welchen Film handelt es sich im folgenden Video? Begründen ihre Entscheidung.",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "iron, iron man, roboter, meer, kampf, true",
      videoExists: true
    }
  });
  await prisma.drawItem.create({
    data: {
      question: "Skizzieren Sie grob Mjölnir"
    }
  });
  await prisma.drawItem.create({
    data: {
      question: "Zeichnen sie das S.H.I.E.L.D Logo"
    }
  });
  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Falcon?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "true,false,false,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Clint Barton?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,true,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Tony Stark?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,true,false,false,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Natasha Romanoff?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,true,false,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Captain America?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,true,false,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Peter Quill?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,true,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Thor?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,true,false,false,false,false"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Gamora?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,false,false,true"
    }
  });

  await prisma.imageSelection.create({
    data: {
      question: "Welche Waffe gehört zu Wenwu?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "false,false,false,false,false,false,false,false,true,false"
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
