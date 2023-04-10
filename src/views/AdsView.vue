<template>
  <div class=" md:p-6 p-2  rounded-md">
  <tabs />
  <Ads />
 
  </div>
</template>

<script setup> 
import Ads from '@/components/AdsComponents/Ads.vue';
import tabs from '@/components/AdsComponents/tabs.vue'
import {useCounterStore} from '@/store/counter.js';

const counter = useCounterStore();


setInterval(() => {
  console.log(counter);
},3000)

</script>

<style lang="scss" scoped>

</style>