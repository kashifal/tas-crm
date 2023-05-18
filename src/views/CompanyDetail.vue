<template>
  <div>
    <CompanyInfo />
    <div class="overflow-scroll">
      <Steps />
    </div>
    <Activities />
  </div>
</template>

<script setup>
import CompanyInfo from "@/components/CDComponents/CompanyInfo.vue";
import Steps from "@/components/CDComponents/Steps.vue";
import Activities from "@/components/CDComponents/Activities.vue";
</script>

<style  scoped>
</style>