<template>
  <dashboardsProf-dashboard nav="dashboard">
    <div class="py-6">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <UiBannerComponent />
        <div class="py-4 grid grid-cols-3 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Meist besuchte Seiten
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsRadarChart :labels="pageVisitsLabels" :datasets="pageVisitsDataSet" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 v-if="state.analyzeTrainingPercentage && state.analyzeTrainingPercentage > 25" class="text-sm font-bold text-yellow-600">
                <ExclamationIcon class="h-6 w-6 inline-block animate-pulse" aria-hidden="true" /> Übungsaktivitäten
              </h3>
              <h3 v-else class="text-sm font-bold text-green-700">
                <CheckIcon class="h-6 w-6 inline-block" aria-hidden="true" /> Übungsaktivitäten
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsBarChart :labels="trainingLabels" :datasets="trainingDataObject" />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-yellow-600">
                <ExclamationIcon class="h-6 w-6 inline-block animate-pulse" aria-hidden="true" /> Übungsverteilung
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <ChartsDoughnutChart :labels="trainingDistributionLabels" :datasets="trainingDistributionData" />
              </ClientOnly>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </dashboardsProf-dashboard>
</template>

<script setup>
import {
  // ClipboardCheckIcon,
  ExclamationIcon,
  CheckIcon
} from "@heroicons/vue/outline";
// import { onMounted } from "vue";
// import { Radar, Line } from "vue-chartjs";
// import { Chart as ChartJS } from "chart.js";
const { data: api } = await useFetch("/api/statistics");
const data = api.value;
const pageVisitsLabels = [];
const pageVisitsData = [];

const trainingLabels = [];
const trainingData = [];
let trainingDataObject = [];

// const students = [];
data.forEach((item) => {
  if (item.action === "nav") {
    const name = mapToName(item.params, item.action);
    const index = pageVisitsLabels.findIndex(el => el === name);
    // console.log(name, index);
    if (index === -1) {
      pageVisitsLabels.push(name);
      pageVisitsData.push(1);
    } else {
      pageVisitsData[index] = pageVisitsData[index] + 1;
    }
  } else if (item.action === "training-1") {
    const name = mapToName(item.params, item.action);
    const index = trainingLabels.findIndex(el => el === name);
    // console.log(name, index);
    if (index === -1) {
      trainingLabels.push(name);
      trainingData.push(1);
    } else {
      trainingData[index] = trainingData[index] + 1;
    }
    trainingDataObject = [{
      data: trainingData,
      label: "Studenten",
      backgroundColor: ["rgba(67, 56, 202, 0.5)", "rgba(22, 163, 74, 0.5)", "rgba(220, 38, 38, 0.5)"]
    }];
  }
});
const pageVisitsDataSet = [{
  data: pageVisitsData,
  label: "Studenten",
  fill: true,
  backgroundColor: "rgba(67, 56, 202, 0.2)",
  borderColor: "rgb(67, 56, 202)",
  pointBackgroundColor: "rgb(67, 56, 202)",
  pointBorderColor: "#fff",
  pointHoverBackgroundColor: "#fff",
  pointHoverBorderColor: "rgb(67, 56, 202)"
}];
function mapToName (param, action) {
  if (action === "nav") {
    param = param.toString().substring(1);
    const arr = [/student\/results\/\d+/g, /student\/training\/\d+/g, /student\/training/g, /student/g];
    const repl = ["Übungsergebnisse", "Übungsblätter", "Übungen", "Dashboard"];
    for (let i = 0; i < arr.length; i++) {
      param = param.replace(arr[i], repl[i]);
    }
    return param;
  } else if (action === "training-1") {
    const arr = ["start", "submitted", "canceled"];
    const repl = ["Übung begonnen", "Übung abgeschickt", "Übung abgebrochen"];
    for (let i = 0; i < arr.length; i++) {
      param = param.replace(arr[i], repl[i]);
    }
    return param;
  }
}

const state = reactive({ analyzeTrainingPercentage: 0, loading: true, timelineItems: [] });
onMounted(() => {
  state.analyzeTrainingPercentage = localStorage.getItem("analyzeTraining");
  analyzeTraining(trainingDataObject);
  // console.log(trainingDataObject);
});

function analyzeTraining () {
  const data = trainingDataObject[0].data;
  const percentage = 100 * data[2] / (data[1] + data[2]);
  // console.log(percentage);
  localStorage.setItem("analyzeTraining", percentage);
  // if(trainingDataObject)
}

// const trainingActionsLabels = ["Übung begonnen", "Übung abgeschickt", "Übung abgebrochen"];
// const trainingActionsData = [{
//   data: [20, 5, 15],
//   label: "Studenten",
//   backgroundColor: ["rgba(67, 56, 202, 0.5)", "rgba(22, 163, 74, 0.5)", "rgba(220, 38, 38, 0.5)"]
// }];

const trainingDistributionLabels = ["Bestanden", "Nicht bestanden"];
const trainingDistributionData = [{ data: [10, 15], backgroundColor: ["rgba(22, 163, 74, 0.5)", "rgba(220, 38, 38, 0.5)"] }];
// console.log(navs);
// console.log(students);

// app.component("Bar", Bar);
// const [title = api.value.title;
// const text = api.value.text;

// const pageVisits = {
//   // datasets: pageVisits
//   labels: pageVisitsLabels,
//   datasets: [{
//     data: pageVisitsData,
//     // label: "Students",
//     backgroundColor: [
//       "rgba(255, 99, 132, 0.2)",
//       "rgba(54, 162, 235, 0.2)",
//       "rgba(255, 206, 86, 0.2)",
//       "rgba(75, 192, 192, 0.2)",
//       "rgba(153, 102, 255, 0.2)",
//       "rgba(255, 159, 64, 0.2)"
//     ]
//   }]
// };
// const chartOptions = {
//   responsive: true,
//   scales: {
//     y: {
//       ticks: {
//         stepSize: 1
//       }
//     }
//   }
// };
// onMounted(() => {
//   const ctx = document.getElementById("myChart").getContext("2d");
//   console.log(ctx);
//   const chart = new ChartJS(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [{
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)"
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
//   console.log(chart);
// });
</script>
