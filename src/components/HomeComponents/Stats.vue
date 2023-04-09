<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <snapshot />
        <h3 class="text-base font-medium leading-6 text-primary">Snapshot</h3>
      </div>
       <div class="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-md">
        <div class="flex items-center gap-2">
         <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 text-iconColor text-primary h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
        <h3 class="text-base font-medium leading-6 text-iconColor">Filter Period</h3>
        </div>

        <select name="" id="" class="px-8 bg-transparent text-iconColor text-sm">
        <option value="1">All Time</option>
        </select>
      </div>
    </div>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.id"
        class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 ring-1 ring-gray-100 shadow-sm sm:px-6 sm:pt-6"
      >
        <dt>
          <div class="absolute rounded-full bg-primary/40 p-5">
            <component :is="item.icon" class="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
        </dt>
        <dd class="ml-20 flex items-baseline pb-6 sm:pb-7">
          <div class="flex flex-col">
            <p class="text-2xl font-semibold text-iconColor">{{ item.stat }}</p>
            <p class="truncate text-sm block font-medium text-iconColor">{{ item.name }}</p>
            <a class="truncate text-xs font-normal text-sky-600">view leads</a>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon
} from "@heroicons/vue/24/outline";
import Ads from "@/components/svgs/Ads.vue";
import Layer from "@/components/svgs/Layer.vue";
import users from "@/components/svgs/users.vue";
import Dollar from "@/components/svgs/Dollar.vue";
import snapshot from "@/components/svgs/snapshot.vue";
import { Icon } from '@iconify/vue';

const stats = [
  {
    id: 1,
    name: "Live Ads",
    stat: "2",
    icon: Ads,
    change: "2",
    changeType: "increase"
  },
  {
    id: 2,
    name: "Ad Templates",
    stat: "4",
    icon: Layer,
    change: "4",
    changeType: "increase"
  },
  {
    id: 3,
    name: "Leads",
    stat: "56",
    icon: users,
    change: "56",
    changeType: "decrease"
  },
  {
    id: 3,
    name: "Opportunity",
    stat: "126k",
    icon: Dollar,
    change: "126k",
    changeType: "decrease"
  }
];
</script>