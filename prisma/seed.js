/* eslint-disable */
const { PrismaClient } = require("@prisma/client");
const { set } = require("date-fns");
const prisma = new PrismaClient();

async function main () {
  await prisma.closedText.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"medium",
      hint:"Erst ab Avengers spielte Mark Ruffalo den Hulk. 2008 wurde er noch von Edward Norton verkörpert",
      title: "Hulk",
      text: "Hulk ist die einzige Rolle im MCU, bei der der Schauspieler $$ wurde. Sie wurde im Film \"Der unglaubliche \" Hulk von $$ gespielt.",
      answers: "ausgetauscht,Edward Norton"
    }
  });
  await prisma.closedText.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Captain America spielt 1942 im zweiten Weltkrieg und bekämpft Hydra.",
      title: "Captain America: The First Avenger",
      text: "Im Jahr $$, während des Zweiten Weltkriegs, dringen Soldaten der Organisation $$, der Wissenschaftsdivision des Dritten Reichs, in die norwegische Stadt Tønsberg ein. In einem Kloster findet Johann Schmidt, ein mysteriöses, würfelförmiges Artefakt, das er als $$ bezeichnet. Dem Wissenschaftler Arnim Zola gelingt es, die Energien des Würfels zu bändigen und als Quelle für neuartige Energiewaffen zu nutzen.",
      answers: "1942,hydra,tesserakt"
    }
  });
  await prisma.closedText.create({
    data: {
      area: "Multiverse",        
      difficulty:"medium",
      hint:"Green Goblin in seiner bessessenen Form übernimmt am Ende die Rolle des Bösewichts.",
      title: "Hulk",
      text: "$$ wandelt sich Laufe von Spider Man: No Way Home von einer tragischen Figur zum Antagonisten, während $$ diese Entwicklung umkehrt.",
      answers: "Green Goblin,Dr. Octopus"
    }
  });
  await prisma.closedText.create({
    data: {
      area: "Multiverse",        
      difficulty:"easy",
      hint:"Captain America spielt 1942 im zweiten Weltkrieg und bekämpft Hydra.",
      title: "Captain America: The First Avenger",
      text: "Peter Parkers Wunsch, dass seine Freunde, darunter $$, ihn nicht $$, lösen das Zusammenbrechen des Multiverse aus",
      answers: "michelle, vergessen"
    }
  });
  await prisma.multipleChoice.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Es gibt 7 Helden und einen Supervillain.",
      question: "Welche der folgenden Superhelden traten im ersten Avengersfilm auf?",
      answers : "Dr. Strange,Thor,Loki,Spiderman",
      answersCorrect: "answer2,answer3"
    }
  });
  await prisma.hearingTask.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"difficult",
      hint:"Hier unterhalten sich Thor und Hulk über Loki. Der Film muss also in Avengers oder Thor 2 spielen.",
      question: "Aus welchem Film ist dieser Ausschnitt?",
      answers : "Black Widow,Iron Man 2,Thor: The Dark Kingdom, Thor: Tag der Entscheidung,Iron Man",
      answersCorrect: "answer3"

    }
  });
  await prisma.multipleChoice.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Insgesamt sechs Infinity-Steine werden in den Filmen gessammelt: Raumstein Zeitstein Gedankenstein Seelenstein Realitätsstein Machtstein",
      question: "Welche der folgenden Infinity-Steine gibt es nicht?",
      answers : "Zeistein, Geiststein, Gedankenstein, Raumstein",
      answersCorrect: "answer2"

    }
  });
  await prisma.multipleChoice.create({
    data: {
      area: "Multiverse",        
      difficulty:"easy",
      hint:"Aqua Man gehört nicht in das MCU. Iron Man ist tot.",
      question: "Welche der folgenden Helden tauchen im Multiverse auf?",
      answers : "Spider Man, Ant Man, Iron Man, Aqua Man",
      answersCorrect: "answer1,answer2"

    }
  });
  await prisma.multipleChoice.create({
    data: {
      area: "Multiverse",        
      difficulty:"easy",
      hint:"Wie gewünscht, übernimmt der Falcon den Schild von Captain America und damit seine Rolle.",
      question: "Welcher Held übernimmt die Rolle von Captain America?",
      answers : "Captain America, Vision, Falcon, Winter Soldier",
      answersCorrect: "answer3"

    }
  });
  await prisma.dragDrop.create({
    data: {
      title: "Drag & Drop: Sortieren Sie die folgenden Filme nach ihrem Erscheinungsjahr von alt nach neu"
    }
  });
  await prisma.shortText.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Tony Stark ist für seine Intelligenz und scharfe Zunge bekannt.",
      title: "Bitte beantworten Sie die Frage in wenigen Worten",
      question: "Nennen sie 2 Stärken von Iron Man.",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "fliegen, unverwundbar, intelligent, reich, innovativ, schlagfertig, gewitzt",
      videoExists: false
    }
  });
  await prisma.shortText.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Dies ist der zweite alleinstehende Film von Iron Man. Er ist Teil der ersten Phase der Avengers.",
      title: "Bitte beantworten Sie die Frage.",
      question: "Um welchen Film handelt es sich im folgenden Video? Begründen ihre Entscheidung.",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "iron man 2",
      videoExists: true
    
    }
  });
  await prisma.shortText.create({
    data: {
      area: "Multiverse",        
      difficulty:"easy",
      hint:"Peter Parker wird von Vielen für einen Massenmörder gehalten.",
      title: "Bitte beantworten Sie die Frage in wenigen Worten",
      question: "Welcher Charakter löst mit seiner Bitte an Dr. Strange das Multiverse aus?",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "spider man",
      videoExists: false
    }
  });
  await prisma.shortText.create({
    data: {
      area: "Multiverse",        
      difficulty:"mittel",
      hint:"Es tauchen Feinde von Spider Man aus alten Reihen auf.",
      title: "Bitte beantworten Sie die Frage.",
      question: "Nenne 2 Gegner aus dem Multiverse, die Spider Man einfangen muss.",
      answer: "Hier könnte eine Antwort stehen",
      answerKeywords: "goblin, Dr. Octopus, octopus, green goblin, sandman, lizard, vulture, mysterio",
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
      question: "Zeichnen Sie das S.H.I.E.L.D Logo"
    }
  });
  await prisma.drawItem.create({
    data: {
      question: "Zeichnen Sie die Maske von Iron Man"
    }
  });
  await prisma.drawItem.create({
    data: {
      question: "Zeichnen Sie das Marvel Logo"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"medium",
      hint:"Der Falcon taucht das erste Mal an der Seite von Captain America im Film Winter Soldier auf.",
      question: "Welche Waffe gehört zu Falcon?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer1"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"hard",
      hint:"Clint Burton alias \"Hawkeye\" ist ab Avengers häufig als Nebencharakter zu sehen.",
      question: "Welche Waffe gehört zu Clint Barton?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer3"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Die Repulsoren befinden sich an den Füßen und Händen von Iron Man's Rüstung.",
      question: "Welche Waffe gehört zu Tony Stark?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer2"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"medium",
      hint:"Natasha Roman alias \"Black Widow\" ist versiert im Umgang mit vielen Waffen. Von diesen benutzt sie aber nur die Batons",
      question: "Welche Waffe gehört zu Natasha Romanoff?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer4"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Kaum eine Waffe ist so eng mit einem Charakter verbunden wie der Schild von Captain America.",
      question: "Welche Waffe gehört zu Captain America?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer5"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"medium",
      hint:"Der futuristisch anmutende Quadplaster passt gut in die Hände des Raumreisenden Starlord. ",
      question: "Welche Waffe gehört zu Peter Quill?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer8"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"easy",
      hint:"Niemand außer Thor ist in der Lage seinen Hammer Mjolnir zu schwingen.",
      question: "Welche Waffe gehört zu Thor?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer6"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Infinity Wars",        
      difficulty:"medium",
      hint:"Gamora versucht den verrückten Titan Thanos zu vernichten. Sie führt den Godslayer.",
      question: "Welche Waffe gehört zu Gamora?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer10"
    }
  });

  await prisma.imageSelection.create({
    data: {
      area: "Multiverse",        
      difficulty:"difficult",
      hint:"Wie bereits der Titel des einzigen Auftritts von Wenwu andeutet, nutzt er die Ten Rings",
      question: "Welche Waffe gehört zu Wenwu?",
      answers : "Redwing,Repulsor,Bow and Arrow,Batons,Vibranium Shield,Mjolnir,Necroswords,Quadblaster,Ten Rings,Godslayer",
      answersCorrect: "answer9"
    }
  });

  await prisma.studentTrainingAction.create({
    data: {
      exercise:    101,
      userID:      1,
      itemType:    "hearingtask",
      itemID:      101,
      answers:     "answer2",
      correct:     "answer3",
      started:     set(new Date(), {hours: 18, minutes: 28, seconds: 47}),
      finished:    set(new Date(), {hours: 18, minutes: 29, seconds: 05}),
      difficulty:  "hard",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });


  await prisma.studentTrainingAction.create({
    data: {
      exercise:    100, 
      userID:      1,
      itemType:    "hearingtask",
      itemID:      102,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 29, seconds: 34}),
      finished:    set(new Date(), {hours: 18, minutes: 29, seconds: 45}),
      difficulty:  "hard",
      area:        "Infinity Wars",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  100,
      userID:      1,
      itemType:    "imageselection",
      itemID:      103,
      answers:     "answer3",
      correct:     "answer3",
      started:     set(new Date(), {hours: 18, minutes: 30, seconds: 12}),
      finished:    set(new Date(), {hours: 18, minutes: 30, seconds: 21}),
      difficulty:  "mittel",
      area:        "Infinity Wars",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  100,
      userID:      1,
      itemType:    "shorttext",
      itemID:      104,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 30, seconds: 48}),
      finished:    set(new Date(), {hours: 18, minutes: 31, seconds: 3}),
      difficulty:  "hard",
      area:        "Infinity Wars",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  100,
      userID:      1,
      itemType:    "closedtext",
      itemID:      105,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 31, seconds: 21}),
      finished:    set(new Date(), {hours: 18, minutes: 30, seconds: 31}),
      difficulty:  "medium",
      area:        "Infinity Wars",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "multiplechoice",
      itemID:      106,
      answers:     "answer2,answer3",
      correct:     "answer2,answer4",
      started:     set(new Date(), {hours: 18, minutes: 31, seconds: 54}),
      finished:    set(new Date(), {hours: 18, minutes: 32, seconds: 22}),
      difficulty:  "medium",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "shorttext",
      itemID:      107,
      answers:     "answer1",
      correct:     "answer3",
      started:     set(new Date(), {hours: 18, minutes: 32, seconds: 46}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 49}),
      difficulty:  "hard",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });



  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "closedtext",
      itemID:      108,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });

  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "imageselection",
      itemID:      109,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "imageselection",
      itemID:      110,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "mittel",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "imageselection",
      itemID:      111,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "imageselection",
      itemID:      112,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "multiplechoice",
      itemID:      113,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "multiplechoice",
      itemID:      114,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "mittel",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "multiplechoice",
      itemID:      115,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "multiplechoice",
      itemID:      116,
      answers:     "answer2",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "shorttext",
      itemID:      117,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "shorttext",
      itemID:      118,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       1,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "shorttext",
      itemID:      119,
      answers:     "answer2",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "shorttext",
      itemID:      120,
      answers:     "answer2",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "closedtext",
      itemID:      121,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "schwer",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "closedtext",
      itemID:      122,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "mittel",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "closedtext",
      itemID:      123,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "mittel",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
    }
  });
  await prisma.studentTrainingAction.create({
    data: {
      exercise:  101,
      userID:      1,
      itemType:    "closedtext",
      itemID:      124,
      answers:     "answer1",
      correct:     "answer1",
      started:     set(new Date(), {hours: 18, minutes: 34, seconds: 02}),
      finished:    set(new Date(), {hours: 18, minutes: 33, seconds: 34}),
      difficulty:  "einfach",
      area:        "Multiverse",
      score:       0,
      total:       1,
      keys:        "[testdata]"
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
