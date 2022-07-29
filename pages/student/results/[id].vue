<template>
  <dashboardsStudent-dashboard nav="training">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Ergebnisse
        </h1>
      </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="py-4">
      <InfoCard>
            <template #title>
              Ergebnisse für das Übungsblatt {{ index }}
            </template>
            <template #text>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Punkte: {{ scored }}/{{ total }}
              </h3>
              <h3 v-if="scored/total >= 0.5" class="text-lg leading-6 font-medium text-gray-900">
                Status: Bestanden
              </h3>
              <h3 v-else class="text-lg leading-6 font-medium text-gray-900">
                Status: Nicht Bestanden
              </h3>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ showText }}
              </h3>
            </template>
          </InfoCard>
          <FilledComponent :list="objects" />
        </div>
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>
<script setup>
const route = useRoute();
const index = route.params.id;
const { data: api } = await useFetch("/api/training/" + index);
let lastEntry = 1;
let currentSubmission;
const valuesArray = Array.from(api.value);

valuesArray.forEach((element) => {
  const currentObject = Object.values(element);
  const id = currentObject[0];
  if (lastEntry <= parseInt(id)) {
    lastEntry = parseInt(id);
    currentSubmission = currentObject;
  }
});
const result = Object.values(currentSubmission[6]);
const scored = result[2];
const total = result[3];
const correctString = currentSubmission[3];
const correctArray = correctString.split(";");
const submission = currentSubmission[2].replace(/"/g, "");

const submissionElements = submission.substring(2, submission.length - 2).split("],[");
// "mc1-true,true,true,true;mc2-true,true,true,true;"
const objects = [];
let counter = 0;
let c = "";
let id = -1;
let fillElements = "";
let object;
let correct;
const length = submissionElements.length;
submissionElements.forEach((element) => {
  counter++;
  if (element.includes("id") && id !== -1) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    object = { c, id, fillElements, correct };
    objects.push(object);
    id = -1;
    c = "";
    fillElements = "";
  }
  if (element.includes("closedtext")) {
    c = "ItemsClosed-text";
    if (element.includes("id")) {
      const elementParts = element.split("-");
      id = parseInt(elementParts[9].split(",")[0]);
      correctArray.forEach((elementCorrect) => {
        if (elementCorrect.includes("ct" + id)) {
          const returnElements = elementCorrect.split("-");
          correct = returnElements[1];
        }
      });
    } else {
      fillElements += element.split(",")[1] + ",";
    }
  }
  if (element.includes("imageselection")) {
    c = "ItemsImage-selection";
    const elementParts = element.split("-");
    id = parseInt(elementParts[9].split(",")[0]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("is" + id)) {
        const returnElements = elementCorrect.split("-");
        correct = returnElements[1];
      }
    });
    fillElements = elementParts[9].split(",").slice(2).join(",") + ",";
    // fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (element.includes("multiplechoice")) {
    c = "ItemsMultiple-choice";
    const elementParts = element.split("-");
    id = parseInt(elementParts[9].split(",")[0]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("mc" + id)) {
        const returnElements = elementCorrect.split("-");
        correct = returnElements[1];
      }
    });
    fillElements = elementParts[9].split(",").slice(2).join(",") + ",";
    // fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (element.includes("shorttext")) {
    const elementParts = element.split("-");
    c = "ItemsShort-text";
    // shorttext-6-id-Infinity Wars-easy-Tony Stark ist für seine Intelligenz und scharfe Zunge bekannt.-2-fliegen, unverwundbar, intelligent, reich, innovativ, schlagfertig, gewitzt-28.7.2022-1,,fghj
    id = parseInt(elementParts[9].split(",")[0]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("st" + id)) {
        const returnElements = elementCorrect.split("-");
        correct = returnElements[1];
      }
    });
    fillElements = elementParts[9].split(",").slice(2).join(",") + ",";
  }
  if (element.includes("hearingtask")) {
    c = "ItemsHearing-task";
    const elementParts = element.split("-");
    id = parseInt(elementParts[9].split(",")[0]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("ht" + id)) {
        correct = elementCorrect.split("-")[1];
      }
    });
    fillElements = elementParts[9].split(",").slice(2).join(",") + ",";
    // fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (counter === length) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    object = { c, id, fillElements, correct };
    objects.push(object);
  }
});
let tag;
switch (scored) {
case 0:
case 1:
case 2: tag = "Du bist wie Groot. Du musst noch wachsen!";
  break;
case 3:
case 4: tag = "Nicht aufgeben. Auch Captain America musste hart arbeiten!";
  break;
case 5: tag = "Einfach Thor, da geht vielleicht noch mehr!";
  break;
case 6: tag = "Du vereinst rohe Kraft mit hoher Bildung, HULK!";
  break;
case 7:
case 8:
default: tag = "Ein vollendetes Genie, wie Iron Man!";
  break;
}
const showText = tag;
</script>
