<template>
  <Bar :data="chartData" :options="options" />
</template>

<script>
import { defineComponent, ref ,  onMounted, computed } from 'vue'; 
import client from '../../axios.config';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default defineComponent({
  name: 'BarChart',
  components: {
    Bar
  },
  setup() {

    const barObj = ref({});
    const resolved = ref([]);
    const closed = ref([]);


     onMounted(async () => {
      try {
        const response = await client.get("/Chart/TicketChart");
        barObj.value = response; 
        open.value = barObj.value.ChartOne[0].open;
        resolved.value = barObj.value.ChartOne[0].Resolved;
        closed.value = barObj.value.ChartOne[0].Closed;

        console.log(open.value);
      } catch (error) {
        console.error(error);
      }
    });


      const chartData = computed(() => ({
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],




      datasets: [
        {
          label: 'Open',
          backgroundColor: '#0065A1',
          data: open.value
        },{
          label: 'Resolved',
          backgroundColor: '#F5A800',
          data: resolved.value
        },{
          label: 'Closed',
          backgroundColor: '#18191A',
          data: closed.value
        }
      ]
    }));



    const data = ref({
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],




      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#0065A1',
          data: open.value
        },{
          label: 'Data One',
          backgroundColor: 'red',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },{
          label: 'Data One',
          backgroundColor: '#18191A',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    });

    const options = ref({
      responsive: true,
      maintainAspectRatio: false
    });

    return {
      chartData,
      options
    };
  }
});
</script>
