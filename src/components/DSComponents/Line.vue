<template>
  <line-chart :data="chartData" :options="options"></line-chart>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { Line, Chart as VueChartJS } from "vue-chartjs";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"; 
import client from "../../axios.config";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "Line",
  components: {
    LineChart: Line
  },
  setup() {
    const labels = ref([]);
    const datasets = ref([]);

    onMounted(async () => {
      try {
        const response = await client.get("/Chart/NewUserChart");
        labels.value = response.labels;
        datasets.value = response.datasets;
        console.log(response.labels);
      } catch (error) {
        console.error(error);
      }
    });

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Remove vertical grid lines
          }
        },
        y: {
          grid: {
            display: true // Keep horizontal grid lines if needed
          }
        }
      }
    };

    const chartData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          label: "",
          backgroundColor: "#FF4B55",
          data: datasets.value,
          borderColor: "#FF4B55"
        }
      ]
    }));

    const allData = async () => {
      try {
        const response = await client.get("/Chart/NewUserChart");
        labels.value = response.labels;
        datasets.value = response.datasets;
        console.log(response.labels);
      } catch (error) {
        console.error(error);
      }
    };

    return {
      chartData,
      options,
      allData
    };
  }
};
</script>
