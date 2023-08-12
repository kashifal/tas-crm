<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base px-2 font-normal leading-6 text-gray-900">
          10 proxies available
        </h1>
        <Filter />
      </div>
    </div>
    <div class="flow-root overflow-scroll relative min-w-ful">
      <div class=" min-w-full min-h-[300px] ">
        <div class="inline-block min-w-full py-2 align-middle ">
          <div class="relative">
            <div
              v-if="selectedPeople.length > 0"
              class="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"
            >
              <button
                type="button"
                class="inline-flex items-center rounded bg-darkPrimary px-6 py-2 text-xs font-normal text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
              >
                Replace
              </button>
            </div>
            <table class="min-w-full divide-y   divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :checked="
                        indeterminate || selectedPeople.length === people.length
                      "
                      :indeterminate="indeterminate"
                      @change="
                        selectedPeople = $event.target.checked
                          ? people.map((p) => p.email)
                          : []
                      "
                    />
                  </th>
                  <th
                    scope="col"
                    class="min-w-[4rem] py-3.5 pr-3 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Proxy Address
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Port
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-normal text-gray-900 whitespace-nowrap"
                  >
                    Password
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 min-w-[12rem]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    ASN Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    ASN Number
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Date Added
                  </th>

                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-xs font-medium text-gray-900 whitespace-nowrap"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="person in people"
                  :key="person.email"
                  :class="[
                    selectedPeople.includes(person.email) && 'bg-gray-50',
                  ]"
                >
                  <td class="relative px-7 sm:w-12 sm:px-6">
                    <div
                      v-if="selectedPeople.includes(person.email)"
                      class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                    ></div>
                    <input
                      type="checkbox"
                      class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :value="person.email"
                      v-model="selectedPeople"
                    />
                  </td>
                  <td
                  v-tooltip="{ content: person.address }" 
                    :class="[
                      'whitespace-nowrap py-4 pr-3 text-xs font-medium',
                      selectedPeople.includes(person.email)
                        ? 'text-indigo-600'
                        : 'text-gray-900',
                    ]"
                  >
                    {{ person.address }}
                  </td>
                  <td v-tooltip="{ content: person.port }"  class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.port }}
                  </td>
                  <td v-tooltip="{ content: person.username }"  class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.username }}
                  </td>
                  <td v-tooltip="{ content: person.address }"  class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.password }}
                  </td>
                  <td
                  v-tooltip="{ content: person.status }"
                    class="whitespace-nowrap max-w-[2rem] text-center py-4 text-xs text-gray-500"
                  >
                    <p
                   
                      class="py-1 text-xs text-gray-800 bg-indigo-50 rounded-full"
                    >
                      Checked {{ person.status }} minute ago
                    </p>
                  </td>

                  <td 
                  v-tooltip="{ content: person.country }"
                   class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.country }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.city }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.asn }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.asn_num }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    {{ person.date_added }}
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    <Menu as="div" class="relative inline-block text-left">
                      <div>
                        <MenuButton
                          class="flex items-center rounded-full   text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        >
                          <span class="sr-only">Open options</span>
                          <EllipsisVerticalIcon
                            class="h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>

                      <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          class="absolute right-0 z-50 mt-2 w-32 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-xs',
                                ]"
                                >View Activity</a
                              >
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-xs',
                                ]"
                                >Replace Proxy</a
                              >
                            </MenuItem>
                              
                             
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { EnvelopeIcon } from "@heroicons/vue/20/solid";
import Filter from "@/components/Filter.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu as MenuToolTip
} from 'floating-vue'
import 'floating-vue/dist/style.css'

const people = [
  {
    address: "2.56.119.93",
    port: "5074",
    username: "lqwblmde",
    password: "lhrzsz3p2d0v",
    status: "1",
    country: "🇵🇰",
    city: "Lahore",
    asn: "cafe technology",
    asn_num: "12345",
    date_added: "2023-03-17 11:31:15",
  },
  {
    address: "2.56.119.93",
    port: "5074",
    username: "lqwblmde",
    password: "lhrzsz3p2d0v",
    status: "1",
    country: "🇵🇰",
    city: "Lahore",
    asn: "cafe technology",
    asn_num: "12345",
    date_added: "2023-03-17 11:31:15",
  },{
    address: "2.56.119.93",
    port: "5074",
    username: "lqwblmde",
    password: "lhrzsz3p2d0v",
    status: "1",
    country: "🇵🇰",
    city: "Lahore",
    asn: "cafe technology",
    asn_num: "12345",
    date_added: "2023-03-17 11:31:15",
  },
  
 
];

const selectedPeople = ref([]);
const indeterminate = computed(
  () =>
    selectedPeople.value.length > 0 &&
    selectedPeople.value.length < people.length
);
</script>
