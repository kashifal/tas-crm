<template>
  <div>
    <div class="py-3 flex gap-2 px-3 shadow-lg cursor-pointer ring-1 rounded-lg ring-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>

      <span>Ticket Details</span>
    </div>

    <div
      class="p-8 bg-white flex relative flex-col gap-8 shadow-lg rounded-lg ring-1 my-16 ring-gray-200"
    >
      <router-link
        to="#"
        class="md:absolute right-8 top-6 text-sm bg-primary px-4 py-2 rounded-lg text-white"
      >Ticket Status</router-link>

      <div class="flex items-center gap-20 w-4/5 justify-between flex-wrap">
        <div class="flex flex-col gap-6 ">
          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">TICKET ID</h1>
            <h1>22132</h1>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">RESOLVED DATE</h1>
            <h1>22132</h1>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">Status</h1>
            <h1>Active</h1>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">CREATED DATE</h1>
            <h1>Active</h1>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">COMPANY</h1>
            <h1>company name</h1>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">SUBJECT</h1>
            <h1>company name</h1>
          </div>
        </div>

        <div class="flex gap-6 flex-col">
          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">PRIORITY</h1>
            <h1>company name</h1>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="text-black/60">DESCRIPTION</h1>
            <div class="md:w-[300px] break-all">
              <h1>ewfwvfwadcsfbdfbsavsdgbgfngdngsfadafefdsggnhjtujgdaadda</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TicketsActivities />
  </div>
</template>

<script setup>

import TicketsActivities from '@/components/TDComponents/TicketsActivities.vue'
</script>

<style scoped>
</style>