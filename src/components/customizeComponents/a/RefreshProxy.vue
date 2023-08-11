<template>
  <fieldset class="my-12">
   <div class="">
    <Listbox as="div" v-if="tab.currentTab !== 4" class="mt-16" v-model="selected">
      <div class="flex items-center gap-2">
        <div
          class="h-5 w-5 bg-darkPrimary flex items-center justify-center text-xs text-white rounded-full"
        >
          3
        </div>
        <label for="tabs" class="text-lg font-semibold"
          >How do you wish to refresh your proxies?</label
        >
      </div>
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">AUTOMATIC REFRESH</p>

        <ListboxButton
          class="relative w-full cursor-default mt-1 rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
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
    <Listbox as="div" class="mt-6" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">ON-DEMAND REFRESH</p>

        <ListboxButton
          class="relative w-full cursor-default mt-1 rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
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

    <Listbox as="div" class="mt-6" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">INDIVIDUAL REPLACEMENTS</p>

        <ListboxButton
          class="relative w-full cursor-default mt-1 rounded-sm bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
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

    <div class="mt-8">
      <div class="flex items-center gap-2">
        <div
          class="h-5 w-5 bg-darkPrimary flex items-center justify-center text-xs text-white rounded-full"
        >
          4
        </div>
        <label for="tabs" class="text-lg font-semibold"
          >Additional Features</label
        >
      </div>
      <div
        class="space-y-8 bg-white py-4 rounded-md border border-gray-300 px-4 mt-4"
      >
        <div
          class="relative hover:bg-gray-100 px-4 flex items-center justify-between cursor-pointer py-3 rounded-sm"
        >
          <div class="flex items-start">
            <div class="flex h-6 items-center">
              <input
                id="addition"
                aria-describedby="addition-description"
                name="addition"
                type="checkbox"
                class="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div class="ml-3 text-sm leading-6">
              <label
                for="addition"
                class="font-semibold cursor-pointer text-lg text-gray-900"
                >High Concurrency <span class="bg-darkPrimary px-2 ml-2 py-1 text-white rounded-full text-xs font-light"># Most Popular</span></label
              >
              <label
                for="addition"
                id="candidates-description"
                class="text-gray-500 block mt-2 cursor-pointer"
              >
                Concurrency is limited to 500 by default. Selecting this option
                lets you have 3,000+ concurrency.
                <router-link class="text-xs text-darkPrimary" to="#"
                  >Learn More</router-link
                >
              </label>
            </div>
          </div>

          <p class="text-gray-500 block cursor-pointer">$22.50/mo</p>
        </div>
        <div
          class="relative flex items-center justify-between hover:bg-gray-100 px-4 cursor-pointer py-3 rounded-sm"
        >
          <div class="flex items-start">
          <div class="flex h-6 items-center">
            <input
              id="priority"
              aria-describedby="priority-description"
              name="priority"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div class="ml-3 text-sm leading-6">
            <label
              for="priority"
              class="font-semibold cursor-pointer text-lg text-gray-900"
              >High Priority Network <span class="bg-[#fc9800] px-2 ml-2 py-1 text-white rounded-full text-xs font-light">Recommended</span></label
            >
            <label for="priority" class="text-gray-500 block cursor-pointer">
              This is recommended for latency sensitive applications. Your
              requests will be prioritized over other network requests.
              <router-link class="text-xs text-darkPrimary" to="#"
                >Learn More</router-link
              >
            </label>
          </div>
          </div>
          <p class="text-gray-500 block cursor-pointer">$22.50/mo</p>

        </div>
        <div
          class="relative flex items-center justify-between hover:bg-gray-100 px-4 cursor-pointer py-3 rounded-sm"
        >
         <div class="flex items-start">
          <div class="flex h-6 items-center">
            <input
              id="unlimited"
              aria-describedby="unlimited-description"
              name="unlimited"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div class="ml-3 text-sm leading-6">
            <label
              for="unlimited"
              class="font-semibold cursor-pointer text-lg text-gray-900"
              >Unlimited IP Authorizations</label
            >
            <label for="unlimited" class="text-gray-500 block cursor-pointer">
              1 IP authorization is included free of charge. Selecting this
              option lets you authorize unlimited IP addresses.
              <router-link class="text-xs text-darkPrimary" to="#"
                >Learn More</router-link
              >
            </label>
          </div>
          </div>
          <p class="text-gray-500 block cursor-pointer">$22.50/mo</p>

        </div>
        <div
          class="relative flex items-center justify-between hover:bg-gray-100 px-4 cursor-pointer py-3 rounded-sm"
        >
          <div class="flex items-start">
          <div class="flex h-6 items-center">
            <input
              id="verified"
              aria-describedby="verified-description"
              name="verified"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div class="ml-3 text-sm leading-6">
            <label
              for="verified"
              class="font-semibold cursor-pointer text-lg text-gray-900"
              >Verified Proxy</label
            >

            <label for="verified" class="text-gray-500 w-[70%] block cursor-pointer">
              Want proxies that won’t be blocked on Google Search or Amazon? We
              continue to add more websites for verified proxies. Please send us
              feedback if you would like to have verified proxies for other
              websites.<router-link class="text-xs text-darkPrimary" to="#"
                >Learn More</router-link
              >
            </label>
          </div>
          </div>
          <p class="text-gray-500 block cursor-pointer">$22.50/mo</p>

        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import  {useTab} from '../../../store/tab';

const tab = useTab();
 

const people = [
  { id: 1, name: "Pakistan" },
  { id: 2, name: "Veitnam" },
  { id: 3, name: "Iran" },
  { id: 4, name: "Iraq Baghdad, 24-4-040" },
  { id: 5, name: "China" },
];

const selected = ref(people[3]);
</script>
