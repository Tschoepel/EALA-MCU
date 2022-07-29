<template>
  <dashboardsStudent-dashboard nav="dashboard">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Übersicht
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4 grid grid-cols-3 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Leistung
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsRadarChart :labels="itemsDoneLabels" :datasets="itemsDoneData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Übungsblätter
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsBarChart :labels="trainingActionsLabels" :datasets="trainingActionsData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-yellow-600">
                Punkte
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="trainingDistributionLabels" :datasets="trainingDistributionData" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>
<script setup>
const { data: apiResults } = await useFetch("/api/studentres/1");
const arrayResults = Array.from(apiResults.value);
let passedEx = 0;
let failedEx = 0;
let totalEx = 0;
let totalScore = 0;
let totalTotal = 0;
arrayResults.forEach((element) => {
  const currentObject = Object.values(element);
  const scored = currentObject[1];
  totalScore = totalScore + scored;
  const total = currentObject[2];
  totalTotal = totalTotal + total;
  const passed = (scored / total >= 0.5);
  totalEx = totalEx + 1;
  if (passed) {
    passedEx = passedEx + 1;
  } else {
    failedEx = failedEx + 1;
  }
});
const { data: apiTrainings } = await useFetch("/api/studentstat/1");
const valuesArray = Array.from(apiTrainings.value);
let countItems = 0;
let countClosed = 0;
let countMultiple = 0;
let countShort = 0;
let countImage = 0;
let countSound = 0;
let countOther = 0;
valuesArray.forEach((element) => {
  const currentObject = Object.values(element);
  const id = currentObject[0];
  console.log(id);
  const submission = currentObject[2].replace(/"/g, "");
  const submissionElements = submission.substring(2, submission.length - 2).split("],[");
  submissionElements.forEach((element) => {
    if (element.includes("id")) {
      countItems = countItems + 1;
      if (element.includes("closedtext")) {
        countClosed = countClosed + 1;
      } else if (element.includes("multiplechoice")) {
        countMultiple = countMultiple + 1;
      } else if (element.includes("shorttext")) {
        countShort = countShort + 1;
      } else if (element.includes("imageselection")) {
        countImage = countImage + 1;
      } else if (element.includes("hearingtask")) {
        countSound = countSound + 1;
      } else {
        countOther = countOther + 1;
      }
    }
  });
});
const itemsDoneLabels = ["Multiple-Choice", "Lückentext", "Kurztext", "Sounderkennung", "Bilderkennung", "Andere"];
const itemsDoneData = [{
  data: [countMultiple, countClosed, countShort, countSound, countImage, countOther],
  label: "Items",
  fill: true,
  backgroundColor: "rgba(67, 56, 202, 0.2)",
  borderColor: "rgb(67, 56, 202)",
  pointBackgroundColor: "rgb(67, 56, 202)",
  pointBorderColor: "#fff",
  pointHoverBackgroundColor: "#fff",
  pointHoverBorderColor: "rgb(67, 56, 202)"
}];
const trainingActionsLabels = ["Übung durchgeführt", "Bestanden", "Nicht Bestanden"];
const trainingActionsData = [{
  data: [totalEx, passedEx, failedEx],
  label: "Übungen",
  backgroundColor: ["rgba(67, 56, 202, 0.5)", "rgba(22, 163, 74, 0.5)", "rgba(220, 38, 38, 0.5)"]
}];
const trainingDistributionLabels = ["Punkte", "Fehler"];
const trainingDistributionData = [{ data: [totalScore, totalTotal - totalScore], backgroundColor: ["rgba(22, 163, 74, 0.5)", "rgba(220, 38, 38, 0.5)"] }];
</script>
