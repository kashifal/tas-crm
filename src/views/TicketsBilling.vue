<template>
  <div>
    <CompanyInfo />
    <div class="overflow-scroll">
      <Steps />
    </div>
    <BillingActivities />
  </div>
</template>

<script setup>
import CompanyInfo from "@/components/CDComponents/CompanyInfo.vue";
import Steps from "@/components/CDComponents/Steps.vue";
import Activities from "@/components/CDComponents/Activities.vue";
import BillingActivities from '@/components/TBComponents/BillingActivities.vue'; 
</script>

<style  scoped>
</style>