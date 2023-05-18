<template>
  <nav aria-label="Progress" class="max-w-6xl mx-auto ">
    <ol role="list" class="flex px-2 py-16">
      <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']">
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-primary" />
            <div class="h-3 w-3 bg-primary  absolute right-[6%] md:right-[15%] rounded-full" />
          </div> 
          <a href="#" class="relative flex w-32 h-8 px-4   items-center justify-center rounded-md bg-primary hover:bg-primary py-6">
            <!-- <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" /> -->
            <span class="text-white font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
            <div class="h-3 w-3 bg-white ring-1 ring-primaryGray  absolute right-[6%] md:right-[15%] rounded-full" />
          </div>
          <a href="#" class="relative flex h-8 w-32  bg-primaryGray px-4 items-center justify-center rounded-md   border-primary py-6" aria-current="step">
            <!-- <span class="h-2.5 w-2.5 rounded-md bg-primary" aria-hidden="true" /> -->
            <span class="font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </a>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
            <div class="h-3 w-3 bg-white ring-1 ring-primaryGray  absolute right-[6%] md:right-[15%] rounded-full" />

          </div>
          <a href="#" class="group relative flex h-8 w-32 bg-primaryGray px-4 items-center justify-center rounded-md py-6 hover:border-gray-400">
            <span class="h-2.5 w-2.5 rounded-md bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
            <span class="font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const steps = [
  { name: 'New', href: '#', status: 'complete' },
  { name: 'Follow-up', href: '#', status: 'complete' },
  { name: 'Under Review', href: '#', status: 'complete' },
  { name: 'Demo', href: '#', status: 'current' },
  { name: 'Negotiation', href: '#', status: 'upcoming' },
  { name: 'Won/Lost', href: '#', status: 'upcoming' },
]
</script>