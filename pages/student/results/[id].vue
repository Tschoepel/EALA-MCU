<template>
  <dashboardsStudent-dashboard nav="training">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Ergebnisse für das Übungsblatt {{ index }}
        </h1>
      </div>
      <div class="max-w-none mx-auto">
        <div class="bg-white overflow-hidden sm:rounded-lg sm:shadow">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Punkte: {{ scored }}/{{ total }}
                </h3>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Scored: {{ scored }}
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
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Submission: {{ submission }}
                </h3>
                 <h3 class="text-lg leading-6 font-medium text-gray-900">
                  SubmissionElements: {{ submissionElements }}
                </h3>
                 <h3 class="text-lg leading-6 font-medium text-gray-900">
                  SubmissionElementsLength: {{ submissionElementsLength }}
                </h3>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Objects: {{ objects[0].c }}/{{ objects[0].id }}/{{ objects[0].fillElements }}
                </h3>
              </div>
              <FilledComponent :list=objects>
              </FilledComponent>
            </div>
          </div>
        </div>
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
    c = "ItemsMultiple-choice";
    id = parseInt(element.split(",")[1]);
    fillElements = element.split(",").slice(2).join(",") + ",";
  }
  if (counter === length) {
    fillElements = fillElements.substring(0, fillElements.length - 1);
    object = { c, id, fillElements };
    objects.push(object);
  }
});
const submissionElementsLength = submissionElements.length;
</script>
