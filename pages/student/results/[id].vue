<template>
  <dashboardsStudent-dashboard nav="training">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Ergebnisse für das Übungsblatt {{ index }}
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <InfoCard>
            <template #title>
              Ergebnisse für das Übungsblatt {{ index }}
            </template>
            <template #text>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Punkte: {{ scored }}/{{ total }}
              </h3>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Note: {{ grade }}
              </h3>
              <h3 v-if="scored/total >= 0.5" class="text-lg leading-6 font-medium text-gray-900">
                Status: Bestanden
              </h3>
              <h3 v-else class="text-lg leading-6 font-medium text-gray-900">
                Status: Nicht Bestanden
              </h3>
            </template>
          </InfoCard>
          <FilledComponent :list="objects" />
        </div>
        <!-- /End replace -->
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
  console.log("CurrentObject: " + currentObject);
  const id = currentObject[0];
  if (lastEntry <= parseInt(id)) {
    lastEntry = parseInt(id);
    currentSubmission = currentObject;
  }
});
const result = Object.values(currentSubmission[6]);
const scored = result[2];
const total = result[3];
const grade = result[4];
console.log("current Sub 1: " + currentSubmission[0]);
console.log("current result: " + currentSubmission[1]);
console.log("current result: " + currentSubmission[2]);
console.log("current result: " + currentSubmission[3]);
console.log("current result: " + currentSubmission[4]);
console.log("current result: " + currentSubmission[5]);
console.log("current result: " + currentSubmission[6]);
const correctString = currentSubmission[3];
console.log(correctString);
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
  console.log("Current submission: " + element);
  counter++;
  if (element.includes("id") && id !== -1) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    console.log("correct: " + correct);
    object = { c, id, fillElements, correct };
    objects.push(object);
    id = -1;
    c = "";
    fillElements = "";
  }
  if (element.includes("closedtext")) {
    c = "ItemsClosed-text";
    if (element.includes("id")) {
      id = parseInt(element.split(",")[1]);
      correctArray.forEach((elementCorrect) => {
        if (elementCorrect.includes("ct" + id)) {
          const returnElements = elementCorrect.split("-");
          console.log("Retel: " + returnElements);
          console.log("Retel[1]: " + returnElements[1]);
          correct = returnElements[1];
        }
      });
    } else {
      fillElements += element.split(",")[1] + ",";
    }
  }
  if (element.includes("imageselection")) {
    c = "ItemsImage-selection";
    id = parseInt(element.split(",")[1]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("is" + id)) {
        const returnElements = elementCorrect.split("-");
        console.log("Retel: " + returnElements);
        console.log("Retel[1]: " + returnElements[1]);
        correct = returnElements[1];
        console.log("CORRECT IMAGE: " + correct);
      }
    });
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (element.includes("multiplechoice")) {
    c = "ItemsMultiple-choice";
    id = parseInt(element.split(",")[1]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("mc" + id)) {
        const returnElements = elementCorrect.split("-");
        console.log("Retel: " + returnElements);
        console.log("Retel[1]: " + returnElements[1]);
        correct = returnElements[1];
      }
    });
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (element.includes("shorttext")) {
    console.log("Short Text");
    console.log(element);
    const elementParts = element.split(",");
    console.log(elementParts);
    console.log("ShortTextID:" + elementParts[1]);
    c = "ItemsShort-text";
    id = parseInt(elementParts[1]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("st" + id)) {
        const returnElements = elementCorrect.split("-");
        console.log("Retel: " + returnElements);
        console.log("Retel[1]: " + returnElements[1]);
        correct = returnElements[1];
      }
    });
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (element.includes("hearingtask")) {
    console.log("HearingTask");
    console.log(element);
    c = "ItemsHearing-task";
    id = parseInt(element.split(",")[1]);
    correctArray.forEach((elementCorrect) => {
      if (elementCorrect.includes("ht" + id)) {
        correct = elementCorrect.split("-")[1];
      }
    });
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (counter === length) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    console.log("correct: " + correct);
    object = { c, id, fillElements, correct };
    objects.push(object);
  }
});
</script>
