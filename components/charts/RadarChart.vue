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
        datasets: this.datasets
      },
      chartOptions: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              display: false,
              max: 50,
              min: 1,
              maxTicksLimit: 5
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
