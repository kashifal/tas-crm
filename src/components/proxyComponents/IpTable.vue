<template>
  <div class="">
     
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                    IP Address
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Last used on
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-medium text-gray-900 whitespace-nowrap"
                  >
                    Created on
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-gray-900 whitespace-nowrap"
                  >
                    Action
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
    country: "🇮🇳",
    city: "New Delhi",
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
