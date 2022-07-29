<template>
  <dashboardsStudent-dashboard nav="dashboard">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Übersicht
        </h1>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ showText }}
        </h3>
        <img :src="srcimg" style="height: 300px; width: fit-content;">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ showWeakness }}
        </h3>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4 grid grid-cols-3 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Items
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
                Leistung
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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Infinity Wars
        </h1>
        <img src="../../assets/images/infinitywardash.jpg" style="height: 300px; width: fit-content;">
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4 grid grid-cols-4 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-green-900">
                Hulk-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="hulkInfinityLabels" :datasets="hulkInfinityData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-yellow-900">
                Thor-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="thorInfinityLabels" :datasets="thorInfinityData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-blue-600">
                Captain America-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="captainInfinityLabels" :datasets="captainInfinityData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-red-600">
                Iron Man-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="ironInfinityLabels" :datasets="ironInfinityData" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Multiverse
        </h1>
        <img src="../../assets/images/multiversedash.jpg" style="height: 300px; width: fit-content;">
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div class="py-4 grid grid-cols-4 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-green-900">
                Hulk-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="hulkMultiLabels" :datasets="hulkMultiData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-yellow-900">
                Thor-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="thorMultiLabels" :datasets="thorMultiData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-blue-600">
                Captain America-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="captainMultiLabels" :datasets="captainMultiData" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-4">
              <h3 class="text-sm font-bold text-red-600">
                Iron Man-Items
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="ironMultiLabels" :datasets="ironMultiData" />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboardsStudent-dashboard>
</template>
<script setup>
// Dashboard used for student self-assessement: currently shows how they do in different item categories and areas of learning
// Based on this data, student's strength is shown with avatar of hero, proposal of looking for students with other avatars
// based on biggest weakness
// this should only show one possible example of self-assessement we could do based on the data we currently collect.
// grab data for charts

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
const { data: itemActions } = await useFetch("/api/itemactions/1");
const valuesArray = Array.from(apiTrainings.value);
const valuesItems = Array.from(itemActions.value);
let countItems = 0;
let countClosed = 0;
let countMultiple = 0;
let countShort = 0;
let countImage = 0;
let countSound = 0;
let countOther = 0;
valuesArray.forEach((element) => {
  const currentObject = Object.values(element);
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
const itemsDoneLabels = ["Multiple-Choice / Hulk", "Lückentext /  Captain America", "Kurztext / Iron Man", "Sounderkennung / Thor", "Bilderkennung / Thor", "Andere"];
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
// generating data from item subs
let hulkMultiSucc = 0;
let hulkMultiComp = 0;
let hulkInfinitySucc = 0;
let hulkInfinityComp = 0;
let thorMultiSucc = 0;
let thorMultiComp = 0;
let thorInfinitySucc = 0;
let thorInfinityComp = 0;
let captainMultiSucc = 0;
let captainMultiComp = 0;
let captainInfinitySucc = 0;
let captainInfinityComp = 0;
let ironMultiSucc = 0;
let ironMultiComp = 0;
let ironInfinitySucc = 0;
let ironInfinityComp = 0;
valuesItems.forEach((element) => {
  switch (element.itemType) {
  case "multiplechoice": if (element.area === "Multiverse") {
    hulkMultiComp = hulkMultiComp + 1;
    if (element.score > 0) { hulkMultiSucc = hulkMultiSucc + 1; }
  } else {
    hulkInfinityComp = hulkInfinityComp + 1;
    if (element.score > 0) { hulkInfinitySucc = hulkInfinitySucc + 1; }
  }
    break;
  case "imageselection":
  case "hearingtask": if (element.area === "Multiverse") {
    thorMultiComp = thorMultiComp + 1;
    if (element.score > 0) { thorMultiSucc = thorMultiSucc + 1; }
  } else {
    thorInfinityComp = thorInfinityComp + 1;
    if (element.score > 0) { thorInfinitySucc = thorInfinitySucc + 1; }
  }
    break;
  case "closedtext": if (element.area === "Multiverse") {
    captainMultiComp = captainMultiComp + 1;
    if (element.score > 0) { captainMultiSucc = captainMultiSucc + 1; }
  } else {
    captainInfinityComp = captainInfinityComp + 1;
    if (element.score > 0) { captainInfinitySucc = captainInfinitySucc + 1; }
  }
    break;
  case "shorttext":
  default: if (element.area === "Multiverse") {
    ironMultiComp = ironMultiComp + 1;
    if (element.score > 0) { ironMultiSucc = ironMultiSucc + 1; }
  } else {
    ironInfinityComp = ironInfinityComp + 1;
    if (element.score > 0) { ironInfinitySucc = ironInfinitySucc + 1; }
  }
    break;
  }
});
const hulkSucc = hulkMultiSucc + hulkInfinitySucc;
const thorSucc = thorMultiSucc + thorInfinitySucc;
const captainSucc = captainMultiSucc + captainInfinitySucc;
const ironSucc = ironMultiSucc + ironInfinitySucc;

// Filling charts with content

const trainingDistributionLabels = ["Hulk", "Thor", "Captain America", "Iron Man"];
const trainingDistributionData = [{ data: [hulkSucc, thorSucc, captainSucc, ironSucc], backgroundColor: ["rgba(38, 220, 38, 0.5)", "rgba(178, 178, 38, 0.5)", "rgba(38, 38, 220, 0.5)", "rgba(220, 38, 38, 0.5)"] }];
const hulkMultiLabels = ["Bestanden", "Gescheitert"];
const hulkInfinityLabels = ["Bestanden", "Gescheitert"];
const hulkMultiData = [{ data: [hulkMultiSucc, hulkMultiComp - hulkMultiSucc], backgroundColor: ["rgba(38, 220, 38, 0.5)", "rgba(38, 110, 38, 0.5)"] }];
const hulkInfinityData = [{ data: [hulkInfinitySucc, hulkInfinityComp - hulkInfinitySucc], backgroundColor: ["rgba(38, 220, 38, 0.5)", "rgba(38, 110, 38, 0.5)"] }];
const thorMultiLabels = ["Bestanden", "Gescheitert"];
const thorInfinityLabels = ["Bestanden", "Gescheitert"];
const thorMultiData = [{ data: [thorMultiSucc, thorMultiComp - thorMultiSucc], backgroundColor: ["rgba(178, 178, 38, 0.5)", "rgba(89, 89, 19, 0.5)"] }];
const thorInfinityData = [{ data: [thorInfinitySucc, thorInfinityComp - thorInfinitySucc], backgroundColor: ["rgba(178, 178, 38, 0.5)", "rgba(89, 89, 19, 0.5)"] }];
const captainMultiLabels = ["Bestanden", "Gescheitert"];
const captainInfinityLabels = ["Bestanden", "Gescheitert"];
const captainMultiData = [{ data: [captainMultiSucc, captainMultiComp - captainMultiSucc], backgroundColor: ["rgba(38, 38, 220, 0.5)", "rgba(38, 38, 110, 0.5)"] }];
const captainInfinityData = [{ data: [captainInfinitySucc, captainInfinityComp - captainInfinitySucc], backgroundColor: ["rgba(38, 38, 220, 0.5)", "rgba(38, 38, 110, 0.5)"] }];
const ironMultiLabels = ["Bestanden", "Gescheitert"];
const ironInfinityLabels = ["Bestanden", "Gescheitert"];
const ironMultiData = [{ data: [ironMultiSucc, ironMultiComp - ironMultiSucc], backgroundColor: ["rgba(220, 38, 38, 0.5)", "rgba(110, 38, 38, 0.5)"] }];
const ironInfinityData = [{ data: [ironInfinitySucc, ironInfinityComp - ironInfinitySucc], backgroundColor: ["rgba(220, 38, 38, 0.5)", "rgba(110, 38, 38, 0.5)"] }];

// Classify student

const calcStrength = Math.max(hulkSucc, thorSucc, captainSucc, ironSucc);
const calcWeakness = Math.min(hulkSucc, thorSucc, captainSucc, ironSucc);
let tag;
let src;
let weakness;
switch (calcStrength) {
case ironSucc:tag = "Wie Iron Man glänzt du durch die einzigartige Fähigkeit, deine eigenen Worte zu finden.";
  src = "../../assets/images/ironmanres.jpg";
  break;
case captainSucc: tag = "Du wars bei Captain Americas Schule des Text-Auswendig-Lernens, oder?";
  src = "../../assets/images/captainAmerica.jpg";
  break;
case thorSucc: tag = "Wie Thor liegen deine Stärken eher in Bildern und Worten, nicht im Lesen.";
  src = "../../assets/images/thorres.jpg";
  break;
case hulkSucc:
default: tag = "Hulks Stärken gleichen deinen, Rumdrücken und Recht haben!";
  src = "../../assets/images/hulk.jpg";
  break;
}
switch (calcWeakness) {
case hulkSucc: weakness = "Du brauchst einen Hulk in deinem Team, der dir zeigt wie man richtig draufschlägt!";
  break;
case thorSucc: weakness = "Du solltest dir jemanden wie Thor für deine Avengers suchen. Du brauchst Hilfe bei der Bildinterpretation!";
  break;
case captainSucc: weakness = "Suche dir einen Captain America, der mit dir die Fakten paukt.";
  break;
case ironSucc:
default: weakness = "Du benötigst die Unterstützung eines Iron Man, um zu lernen, deine eigenene Worte zu finden!";
  break;
}

const showText = tag;
const srcimg = src;
const showWeakness = weakness;
</script>
