 
<template>
  <div class="flex items-center md:justify-between justify-center">
    <div>
      <div class="md:hidden flex items-center gap-2">
        <div class="flex rounded-md overflow-hidden bg-gray-100 ring-1 ring-gray-200 items-center">
          <div class="h-full w-12 text-primary flex items-center justify-center">
            <Arrow />
          </div>
          <select
            id="tabs"
            name="tabs"
            class="block w-full bg-white h-full border-gray-300 p-2 focus:border-primary focus:ring-0 focus:outline-none"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
          </select>
        </div>
        <div class="p-2 ring-1 ring-gray-300 rounded-md">
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
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </div>
        <div class="p-2 rounded-md bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="border-b-2 border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              :href="tab.href"
              @click="TriggerTab"
              :class="[tab.current ? 'border-primary text-primary' : 'border-transparent text-iconColor hover:border-primary hover:text-primary', 'group inline-flex items-center border-b-2 py-4 px-6 w-56 flex items-center justify-center text-sm font-medium']"
              :aria-current="tab.current ? 'page' : undefined"
            >
              <component
                :is="tab.icon"
                :class="[tab.current ? 'text-primary' : 'text-gray-400 group-hover:text-primary', '-ml-0.5 mr-2 h-5 w-5']"
                aria-hidden="true"
              />
              <span>{{ tab.name }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
    <a href="#" class="px-6 md:flex hidden items-center gap-2 py-2 bg-gray-100 py-2 rounded">
      Create Ad Template
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </span>
    </a>
  </div>
</template>

<script setup>
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon
} from "@heroicons/vue/20/solid";
import Ads from "@/components/svgs/Ads.vue";
import Globe from "@/components/svgs/Globe.vue";
import Arrow from "@/components/svgs/Arrow.vue";
import {useAds} from '@/store/adsview.js';

const ads = useAds();


setInterval(() => {
  console.log(ads);
},3000)

const tabs = [
  { name: "Your Ads", href: "#", icon: Ads, current: true },
  { name: "All Ad Templates", href: "#", icon: Globe, current: false }
];


const TriggerTab = () => {
  ads.setFirstTab(true);
}
</script>