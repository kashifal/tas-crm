<template>
  <fieldset class="my-12">
    <legend class="text-sm mb-4">CONFIGURE PROXY SERVER</legend>
    <div class="space-y-8">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="offers"
            type="radio"
            checked
            @click="handleRadioClick(0)"
            class="h-4 w-4 rounded-full border-gray-300 text-teal-600 focus:ring-teal-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-semibold text-lg text-gray-900"
            >Premium Proxy</label
          >
          <p id="comments-description" class="text-gray-500">
            Premium proxies with low ` detection scores.
          </p>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="offers"
            type="radio"
            @click="handleRadioClick(1)"

            class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="candidates" class="font-semibold text-lg text-gray-900"
            >Private Proxy</label
          >
          <p id="candidates-description" class="text-gray-500">
            Private proxy servers optimized to be shared with at most 2 users.
            Higher performance than Premium Proxy.
          </p>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="radio"
            @click="handleRadioClick(2)"

            class="h-4 w-4 rounded "
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="offers" class="font-semibold text-lg text-gray-900"
            >Dedicated Proxy</label
          >
          <p id="offers-description" class="text-gray-500">
            Highest performance proxies only assigned to you.
          </p>
        </div>
      </div>
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="radio"
            @click="handleRadioClick(3)"

            class="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="offers" class="font-semibold text-lg text-gray-900"
            >Rotating Proxy</label
          >
          <p id="offers-description" class="text-gray-500">
            Use a single proxy address and get assigned thousands of different
            IP addresses.
          </p>
        </div>
      </div>
    </div>

    <Listbox v-if="tabStore.currentTab !== 4" as="div" class="mt-16" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">PROXY NUMBER</p>

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
      <p class="text-xs text-gray-400 mt-1 ml-1">$0.0807/Proxy</p>
    </Listbox>
    <Listbox v-if="tabStore.currentTab !== 4" as="div" class="mt-6" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">BANDWIDTH</p>

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


    <Listbox v-if="tabStore.currentTab === 4" as="div" class="mt-16" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">ACCESSIBLE IP COUNT</p>

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
      <p class="text-xs text-gray-400 mt-1 ml-1">$0.0807/Proxy</p>
    </Listbox>
    <Listbox v-if="tabStore.currentTab === 4" as="div" class="mt-6" v-model="selected">
      <div class="relative mt-2">
        <p class="text-sm text-gray-900 mt-2 ml-1">BANDWIDTH</p>

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
    
  </fieldset>
</template>

<script setup>
import { ref,onMounted } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {useTab} from '../../../store/tab';


const people = [
  { id: 1, name: "Pakistan" },
  { id: 2, name: "Veitnam" },
  { id: 3, name: "Iran" },
  { id: 4, name: "Iraq Baghdad, 24-4-040" },
  { id: 5, name: "China" },
];

const selected = ref(people[3]);


const tabStore = useTab();

const handleRadioClick = (index) => {
 
  tabStore.setTab(index + 1); // Offset by 1
  console.log(tabStore.currentTab);
};

onMounted(() =>  {
  tabStore.setTab(1);
})
</script>
