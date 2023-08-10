<template>

<span v-if="login ===  true">
  <layout>
    <router-view></router-view>
  </layout>
</span>
<span v-else-if="login ===  false">
 
    <router-view></router-view>
  
</span>

</template>

<script setup>
import layout from "@/Layout/layout.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";


const login  = true;

const router = useRouter();
const currentRoute = ref(router.currentRoute.value);
const path = currentRoute.value.fullPath;
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
