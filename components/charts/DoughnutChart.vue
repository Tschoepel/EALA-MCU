<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :css-classes="cssClasses"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement);

export default {
  name: "BarChart",
  components: { Doughnut },
  props: {
    chartId: {
      type: String,
      default: "bar-chart"
    },
    datasetIdKey: {
      type: String,
      default: "label"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    labels: {
      type: Array,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      chartData: {
        labels: this.labels,
        datasets: this.datasets
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
</script>
