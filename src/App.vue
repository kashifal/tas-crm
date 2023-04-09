<template>
  <div>
    <Layout>
  
        <router-view></router-view>
 
    </Layout>
  </div>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
</script>

<style  scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>