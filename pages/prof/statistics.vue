<template>
  <dashboardsProf-dashboard nav="statistics">
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">
          Statistics
        </h1>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4 grid grid-cols-2 grid-flow-row gap-4">
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Most visited pages by students
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <Bar
                  :chart-options="chartOptions"
                  :chart-data="chartData"
                  chart-id="chartId"
                  dataset-id-key="label"
                />
              </ClientOnly>
            </div>
          </div>
          <div class="bg-white px-4 py-5 sm:px-6">
            <div class="flex space-x-3">
              <h3 class="text-sm font-bold text-gray-900">
                Training actions taken by students
              </h3>
            </div>
            <div class="px-4 pb-5 sm:p-6 sm:pt-0">
              <ClientOnly>
                <Bar
                  :chart-options="chartOptions"
                  :chart-data="chartData"
                  chart-id="chartId"
                  dataset-id-key="label"
                />
              </ClientOnly>
            </div>
          </div>
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          <!-- <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" /> -->
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </dashboardsProf-dashboard>
</template>

<script setup>
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
const { data: api } = await useFetch("/api/statistics");
const data = api.value;
const navs = [];
const students = [];
data.forEach((item) => {
  if (item.action === "nav") {
    if (!navs.includes(item.params)) {
      navs.push(item.params);
      students.push(1);
    } else {
      const index = navs.indexOf(item.params);
      students[index] = students[index] + 1;
    }
  }
});
// console.log(navs);
// console.log(students);

// app.component("Bar", Bar);
// const [title = api.value.title;
// const text = api.value.text;

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const chartData = {
  labels: navs,
  datasets: [{
    data: students,
    label: "Students",
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)"
    ]
  }]
};
const chartOptions = {
  responsive: true
};
</script>
