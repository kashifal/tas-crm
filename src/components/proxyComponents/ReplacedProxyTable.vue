<template>
  <div class="relative ">
   
  <div class=" relative">
    <dl class="divide-y divide-gray-100 "  >
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Replacements</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">0 Available</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-primary hover:text-primary">EDIT</button>
          </span>
        </dd>
      </div>


       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Automatic Refreshes</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">No automatic refreshes</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-primary hover:text-primary">EDIT</button>
          </span>
        </dd>
      </div>

       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">On Demand Refreshes</dt>
        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">0 Available</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-primary hover:text-primary">EDIT</button>
          </span>
        </dd>
      </div>
       
       
    </dl>

   
  </div>
   
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
</script>