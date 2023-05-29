<template>
  <div class=" min-w-full grid grid-cols-2 gap-8">
    <div class="h-full  shadow-md rounded-xl ring-1 ring-gray-200">
      <h1 class="border-b py-4 pl-4">New Users</h1>
      <div class="h-96 mt-4  p-4">
        <LineChart />
      </div>
    </div>


    <div class="h-full  shadow-md rounded-xl ring-1 ring-gray-200">
      <h1 class=" py-4 pl-4">sales rep activities</h1>
      <div class="h-96 mt-4  p-0">
        <Table />
      </div>
    </div>



    <div class="h-full  shadow-md rounded-xl col-span-2 ring-1 ring-gray-200">
      <div class="pt-16 pl-16 grid grid-cols-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-[#737E83]">Total Opened Tickets</h1>
            <h1 class="font-semibold">{{barObj.TotalOpenedTickets}}K</h1>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="text-[#737E83]">Total Closed Tickets</h1>
            <h1 class="font-semibold">{{barObj.TotalClosedTickets}}K</h1>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="text-[#737E83]">Total Resolved Tickets</h1>
            <h1 class="font-semibold">{{barObj.TotalResolvedTickets}}K</h1>
          </div> 
      </div>
      <div class="h-96 mt-4  pt-4 pb-4 pr-4 pl-16">
        <Bar />
      </div>
    </div>

    

    
  </div>
</template>

<script setup>
import LineChart from "@/components/DSComponents/Line.vue";
import Table from '@/components/DSComponents/Table.vue';
import Bar from '@/components/DSComponents/Bar.vue';
import { ref, onMounted } from "vue";
import client from '../axios.config';

const barObj = ref({});

onMounted(async () => {
  try {
    const response = await client.get("/Chart/TicketChart");
    // console.log(response.TotalClosedTickets, 'n');
    barObj.value = response;

    console.log(barObj.value);
  } catch (error) {
    console.error(error);
  }
});

</script>





<style lang="scss" scoped>
</style>