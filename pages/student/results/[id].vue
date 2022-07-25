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
            <FilledComponent :list=objects>
            </FilledComponent>
          <!-- <ItemsDragDrop :id="1" class="mt-6" />
          <ItemsHearingTask :id="1" class="mt-6" /> -->
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>

<script setup>
const route = useRoute();
const index = route.params.id;
// const date = new Date().toLocaleDateString("de-DE");
const { data: api } = await useFetch("/api/training/" + index);
let lastEntry = 1;
let currentSubmission;
const valuesArray = Array.from(api.value);

valuesArray.forEach((element) => {
  const currentObject = Object.values(element);
  // console.log("ELement " + lastEntry + " : " + currentObject);
  // console.log("Element[0]: " + currentObject[0]);
  const id = currentObject[0];
  if (lastEntry <= parseInt(id)) {
    lastEntry = parseInt(id);
    currentSubmission = currentObject;
  }
});
const result = Object.values(currentSubmission[5]);

console.log("Result: " + result);
const scored = result[2];
const total = result[3];
const grade = result[4];
const submission = currentSubmission[2].replace(/"/g, "");
const submissionElements = submission.substring(2, submission.length - 2).split("],[");
const objects = [];
let counter = 0;
let c = "";
let id = -1;
let fillElements = "";
let object;
const length = submissionElements.length;
submissionElements.forEach((element) => {
  counter++;
  if (element.includes("id") && id !== -1) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    object = { c, id, fillElements };
    objects.push(object);
    id = -1;
    c = "";
    fillElements = "";
  }
  if (element.includes("closedtext")) {
    c = "ItemsClosed-text";
    if (element.includes("id")) {
      id = parseInt(element.split(",")[1]);
    } else {
      fillElements += element.split(",")[1] + ",";
    }
  }
  if (element.includes("multiplechoice")) {
    console.log(element);
    c = "ItemsMultiple-choice";
    id = parseInt(element.split(",")[1]);
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (counter === length) {
    console.log(fillElements);
    fillElements = fillElements.substring(0, fillElements.length - 1);
    object = { c, id, fillElements };
    objects.push(object);
  }
});
console.log(objects);
</script>
