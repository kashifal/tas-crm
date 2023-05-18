<template>
  <div
    class="w-full bg-primaryGray ring-1 overflow-hidden ring-gray-300 rounded-lg grid grid-cols-1 md:grid-cols-10 gap-2"
  >
    <div class="col-span-2 px-4 py-8 space-y-4">
      <div class="bg-primary px-4 cursor-pointer w-full py-3 rounded-lg text-white">Activities</div>
      <div class="bg-transparent cursor-pointer px-4 w-full py-3 rounded-lg text-black">
        Tickets
        <span class="text-red-500">(5)</span>
      </div>
      <div class="bg-transparent cursor-pointer px-4 w-full py-3 rounded-lg text-black">
        Tickets
        <span class="text-red-500">Billing</span>
      </div>
    </div>

    <div class="col-span-8 bg-white px-4 text-left py-8">
      <div class="flex items-center justify-between">
        <h1>Today, May 02, 2023</h1>
        <h1>icon</h1>
      </div>
      <!-- steps for activities -->
      <div class="overflow-hidden mt-8">
        <ActivitySteps />
      </div>
    </div>
  </div>
</template>

<script setup>
import ActivitySteps from "@/components/CDComponents/ActivitySteps.vue";
</script>

<style scoped>
</style>