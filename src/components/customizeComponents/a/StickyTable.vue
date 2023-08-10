<template>
<div class="">
<div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <div class="flex items-center gap-2">
        <div class="h-5 w-5 bg-darkPrimary flex items-center justify-center text-xs text-white rounded-full">2</div>
        <h1 class="text-base font-semibold leading-6 text-gray-900">Choose Location of Proxies</h1>
        </div>
        <p class="mt-2 text-sm text-gray-700">You have <a href="#" class="text-darkPrimary">1,000</a> worldwide proxies left. If you do not choose specific countries, your proxies will be assigned from all around the world.</p>
      </div>
       
    </div>
  <div class="overflow-bg-white bg-white rounded-sm border-1 border-gray-200">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="sticky top-16 z-10 border-b border-gray-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 z-10 hidden border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Availability
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 z-10 hidden border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Quantity
                  </th>
                   
                   
                </tr>
              </thead>
              <tbody>
                <tr v-for="(person, personIdx) in people" :key="person.email">
                  <td
                    :class="[
                      personIdx !== people.length - 1
                        ? 'border-b border-gray-200'
                        : '',
                      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                    ]"
                  >
                    {{person.flag}} {{ person.name }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1
                        ? 'border-b border-gray-200'
                        : '',
                      'whitespace-nowrap hidden px-3 py-4 text-sm text-darkPrimary sm:table-cell',
                    ]"
                  >
                    {{ person.title }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1
                        ? 'border-b border-gray-200'
                        : '',
                      'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell',
                    ]"
                  >
                   <input type="number" v-model="value" class="px-2 py-2 border-gray-400 rounded-md w-full border focus:outline-none focus:border focus:border-darkPrimary" name="" id="">
                  </td>
                   
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const value =   ref(0);
const people = [
  {
    name: "Pakistan",
    flag:'🇵🇰',
    title: "Front-end Developer",  
  },
   {
    name: "India",
    flag:'🇮🇳',
    title: "Front-end Developer",  
  },
   {
    name: "Pakistan",
    flag:'🇵🇰',
    title: "Front-end Developer",  
  },
   {
    name: "China",
    flag:'🇨🇳',
    title: "Front-end Developer",  
  },
   {
    name: "Portugual",
    flag:'🇵🇹',
    title: "Front-end Developer",  
  },
   
  
  // More people...
];
</script>
