<template>
  <div>
    <CompanyInfo />
    <div class="overflow-scroll">
      <Steps />
    </div>
    <BillingInfoActivities />
  </div>
</template>

<script setup>
import CompanyInfo from "@/components/CDComponents/CompanyInfo.vue";
import Steps from "@/components/CDComponents/Steps.vue"; 
import BillingInfoActivities from '@/components/BIComponents/BillingInfoActivities.vue'; 
</script>

<style  scoped>
</style>