<template>
  <div class="px-4 lg:px-8">
    <h1 class="text-xl font-semibold pb-4 text-gray-800"> <span v-if="currentTab  ===  0"> Proxy List</span>
    <span v-else-if="currentTab  ===  1"> Replaced Proxies</span>
    </h1>

    <div class="mx-auto bg-white max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
      <div
        class="px-4 py-8 gap-8 sm:px-6 flex md:flex-row flex-col items-center w-full justify-between lg:px-0 lg:py-8"
      >
        <Listbox as="div" class="w-full" v-model="selected">
          <ListboxLabel
            class="block text-sm font-medium leading-6 text-gray-900"
            >Authentication Method</ListboxLabel
          >
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            >
              <span class="block truncate">{{ selected.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="person in people"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-primary text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-8 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ person.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 left-0 flex items-center pl-1.5',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <Listbox as="div" class="w-full" v-model="selected">
          <ListboxLabel
            class="block text-sm font-medium leading-6 text-gray-900"
            >Connection Method
          </ListboxLabel>
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            >
              <span class="block truncate">{{ selected.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="person in people"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-primary text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-8 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ person.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 left-0 flex items-center pl-1.5',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <Listbox as="div" class="w-full" v-model="selected">
          <ListboxLabel
            class="block text-sm font-medium leading-6 text-gray-900"
            >Proxy Protocol
          </ListboxLabel>
          <div class="relative mt-2">
            <ListboxButton
              class="relative w-full cursor-default rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            >
              <span class="block truncate">{{ selected.name }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="person in people"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'bg-primary text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-8 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ person.name }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 left-0 flex items-center pl-1.5',
                      ]"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>

    <!-- Tabs -->
    <div class=" mt-12 lg:px-8">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primaryfocus:outline-none focus:ring-primary sm:text-sm">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a v-for="(tab) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined" @click="() => setTab(tab.name)">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>


    <div
      class="mx-auto border mt-12  bg-white max-w-7xl lg:flex lg:gap-x-16 lg:px-8"
    >
      <main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-8">
        <div
          
        >

        <div v-if="currentTab  === 0" class="">
        <Table /> 
        </div>
        <div class="" v-else-if="currentTab === 1">
        <ReplacedTable />
        </div>
          
          
        </div>


        
      </main>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-12  gap-12">
            <div class="bg-white px-4  flex items-center gap-4 pt-8 pb-4 justify-center flex-col">
              <h1 class="text-lg font-medium text-gray-800">Proxies not working?</h1>
              <p class="text-xs text-gray-500">Follow the 3 easy steps to fix issues.</p>
              <button class="bg-darkPrimary text-white text-sm py-2 mt-2 rounded-md w-full">TROUBLESHOOT</button>
            </div>

            <div class="bg-white px-4  flex items-center gap-4 pt-8 pb-4 justify-center flex-col">
              <h1 class="text-lg font-medium text-gray-800">Need more proxies?</h1>
              <p class="text-xs text-gray-500">Re-customize your plan anytime.

</p>
              <button class="bg-darkPrimary text-white text-sm py-2 mt-2 rounded-md w-full">CUSTOMIZE PLAN</button>
            </div>
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
  { name: 'All', href: '#', current: true },
  { name: 'Replaced', href: '#', current: false },  // Corrected syntax
]);

function setTab(tabName) {
  if(tabName  === 'All'){
    currentTab.value = 0
  }else if(tabName  === 'Replaced'){
    currentTab.value = 1
  }
  tabs.value.forEach(tab => {
    tab.current = tab.name === tabName;
  });
}


</script>
