<template>
  <div class="">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-normal leading-6 text-gray-900">
          10 proxies available
        </h1>
        
        <div>
          <div class="relative mt-2 shadow-sm">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Search by address or country"
              class="block w-96 border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block max-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="relative">
            <div
              v-if="selectedPeople.length > 0"
              class="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12"
            >
              <button
                type="button"
                class="inline-flex items-center rounded bg-darkPrimary px-6 py-2 text-sm font-normal text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
              >
                Replace
              </button>
            </div>
            <table class="min-w-full table-fixed divide-y divide-gray-300">
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
                    class="min-w-[4rem] py-3.5 pr-3 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    New Address
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Port
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-gray-900 whitespace-nowrap"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 "
                  >
                    Password
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Recovery Proxy
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Date Replaced
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Reasons
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
                    :class="[
                      'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                      selectedPeople.includes(person.email)
                        ? 'text-indigo-600'
                        : 'text-gray-900',
                    ]"
                  >
                    {{ person.address }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.port }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.username }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.password }}
                  </td>
                  <td
                    class="whitespace-nowrap max-w-[2rem] text-center py-4 text-sm text-gray-500"
                  >
                    <p
                      class="py-1 text-xs text-gray-800 bg-indigo-50 rounded-full"
                    >
                      Checked {{ person.status }} minute ago
                    </p>
                  </td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.country }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.city }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.asn }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.asn_num }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.date_added }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { EnvelopeIcon } from "@heroicons/vue/20/solid";

const people = [
   
];

const selectedPeople = ref([]);
const indeterminate = computed(
  () =>
    selectedPeople.value.length > 0 &&
    selectedPeople.value.length < people.length
);
</script>
