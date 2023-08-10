<template>
  <div class="">
    <h1 class="text-xl pl-8 font-semibold pb-4 text-gray-800">  
    Proxy Settings
    </h1>

     

    <!-- Tabs -->
    <div class=" mt-4 lg:px-8">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primaryfocus:outline-none focus:ring-primary sm:text-sm">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a v-for="(tab) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined" @click="() => setTab(tab.name)">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>


    <div
      class="mx-auto border   bg-white max-w-7xl lg:flex lg:gap-x-16 lg:px-8"
    >
      <main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-8">
        <div
          
        >

        <div v-if="currentTab  === 0" class="">
        <GeneralProxy /> 
        </div>
        <div class="" v-else-if="currentTab === 1">
        <IpTable />
        </div>

        <div class="" v-else-if="currentTab === 2">
        <ReplacedProxyTable /> 
        </div>

        <div class="" v-else-if="currentTab === 3">
        <VerifiedProxy /> 
        </div>
          
          
        </div>


        
      </main>
    </div>

     
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
import GeneralProxy from '@/components/proxyComponents/GeneralProxy.vue'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";


const currentTab = ref(0); 

import Select from "@/components/Select.vue";
import Table from '@/components/Table.vue';
import ReplacedTable from '@/components/ReplacedTable.vue';

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import IpTable from '@/components/proxyComponents/IpTable.vue';
import ReplacedProxyTable from '@/components/proxyComponents/ReplacedProxyTable.vue';
import VerifiedProxy from '@/components/proxyComponents/VerifiedProxy.vue'

const people = [
  { id: 1, name: "Pakistan" },
  { id: 2, name: "Veitnam" },
  { id: 3, name: "Iran" },
  { id: 4, name: "Iraq Baghdad, 24-4-040" },
  { id: 5, name: "China" },
];

const selected = ref(people[3]);

 

const mobileMenuOpen = ref(false);
const automaticTimezoneEnabled = ref(true);


const tabs = ref([
  { name: 'GENERAL', href: '#', current: true },
  { name: 'IP AUTHORIZATION', href: '#', current: false },  // Corrected syntax
  { name: 'REPLACE PROXIES', href: '#', current: false },  // Corrected syntax
  { name: 'VERIFIED PROXIES', href: '#', current: false },  // Corrected syntax
]);

function setTab(tabName) {
  if(tabName  === 'GENERAL'){
    currentTab.value = 0
  }else if(tabName  === 'IP AUTHORIZATION'){
    currentTab.value = 1
  }else if (tabName  === 'REPLACE PROXIES'){
    currentTab.value = 2
  }else if (tabName  === 'VERIFIED PROXIES'){
    currentTab.value = 3
  }
  tabs.value.forEach(tab => {
    tab.current = tab.name === tabName;
  });
}


</script>
