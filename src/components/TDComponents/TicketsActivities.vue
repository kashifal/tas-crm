<template>
  <div
    class="w-full bg-primaryGray ring-1 overflow-hidden ring-gray-300 rounded-2xl grid grid-cols-1 md:grid-cols-10 gap-2"
  >
     

    <div class="col-span-12 bg-white px-4 text-left py-8">
      <div class="flex items-center px-4 justify-between">
        <h1>Today, May 02, 2023</h1>
        <ActivitiesIcon />
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
import ActivitiesIcon from "@/components/svgs/ActivitiesIcon.vue";
</script>

<style scoped>
</style>