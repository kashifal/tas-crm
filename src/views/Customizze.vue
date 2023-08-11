<template>
  <div>
    <div class="px-4 lg:px-8">
    <Server />
    <Configure />
    <div    class="">
    <StickyTable />
   
    </div>
     <RefreshProxy />
    </div>

    <!-- absolute  div -->
    <div
      class="sticky left-0 shadow-md flex flex-wrap items-center gap-12  z-50 bottom-0 mt-8 w-full min-h-[90px] py-3 px-8 bg-white "
    >
      <div class="text-xs">
        <p class="mt-1">PAID TODAY</p>
        <h1 class="text-darkPrimary text-3xl font-normal">$53.82</h1>
        <p class="mt-1 text-xs">10% discount applied</p>
      </div>
      <div class="text-xs">
        <p class="mt-1">MONTHLY COST :</p>
        <h1 class="text-darkPrimary text-3xl font-normal line-through">$53.82</h1>
        <p class="mt-1 text-xs">10% discount applied</p>
      </div>
      <button class="px-6 py-2.5 rounded-sm  text-white bg-darkPrimary">
      Continue
      </button>

    </div>
  </div>
</template>

<script setup>
import Server from "@/components/customizeComponents/a/Server.vue";
import Configure from "@/components/customizeComponents/a/Configure.vue";
import StickyTable from "@/components/customizeComponents/a/StickyTable.vue";
import RefreshProxy from '@/components/customizeComponents/a/RefreshProxy.vue';
import {useTab} from '../store/tab';


const tab  = useTab();



</script>

<style scoped></style>
