<template>
  <Radar
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
import { Radar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, RadialLinearScale, PointElement, LineElement, LinearScale, Filler } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, RadialLinearScale, PointElement, LineElement, LinearScale, Filler);

export default {
  components: { Radar },
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
        datasets: [{
          data: this.datasets,
          label: "Studenten",
          fill: true,
          backgroundColor: "rgba(67, 56, 202, 0.2)",
          borderColor: "rgb(67, 56, 202)",
          pointBackgroundColor: "rgb(67, 56, 202)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(67, 56, 202)"
        }]
      },
      chartOptions: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              display: false
            }
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    };
  }
};
</script>
