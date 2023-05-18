<template> 
  <div class=" border rounded-2xl  -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
     
    <div class="inline-block border rounded-2xl  min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
      <table class="min-w-full border rounded-2xl divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500">ID</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500 ">Priority</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500 ">Assignee</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500">Description</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500">Status</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500">Created at</th> 
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-medium text-gray-500 whitespace-nowrap">Completed Date</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="bill in Billings" :key="bill.Assignee" class="cursor-pointer hover:bg-gray-100" @click="navigateToPage('/billing-info')">
            
            <td class=" px-3 py-4 text-sm text-gray-500 lg:table-cell whitespace-nowrap">{{ bill.id }}</td>
            <td class=" px-3 py-4 text-sm text-gray-500 sm:table-cell whitespace-nowrap">{{ bill.Priority === 0 ? 'P1' : 'P2' }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ bill.Assignee  }}</td>
            <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ bill.description  }} </td>
            <td class="px-3 py-4 text-sm text-gray-500">
              <Listbox as="div" v-model="selected[0]"> 
    <div class="relative ">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900   focus:outline-none  sm:text-sm sm:leading-6">
         <div class="">
         <template v-if="bill.status === 0">
  <div class="flex gap-2 items-center">
  <Open />
  <h1>Open</h1>
  </div>
</template>
<template v-else-if="bill.status === 1">
<div class="flex gap-2 items-center">
  <Resolved />
  <h1>Resolved</h1>
  </div>
</template>
<template v-else-if="bill.status === 3">
<div class="flex gap-2 items-center">
  <Progress />
  <h1>Progress</h1>
  </div>
</template>
<template v-else-if="bill.status === 2">
<div class="flex gap-2 items-center">
  <Close />
  <h1>Close</h1>
  </div>
</template>
         </div>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-="true" />
        </span>
        
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-primary text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[person.online ? 'bg-green-400' : 'ring-1 ring-gray-200', 'inline-block h-2 w-2 flex-shrink-0 rounded-full']" aria-="true" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block ']">
                  {{ person.name }}
                  <span class="sr-only"> is {{ person.online ? 'online' : 'offline' }}</span>
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-primary', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
            </td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ bill.created_at  }}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ bill.completed_at  }}</td>
             
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import Progress from '@/components/svgs/Progress.vue';
import Resolved from '@/components/svgs/Resolved.vue';
import Open from '@/components/svgs/Open.vue';
import Close from '@/components/svgs/Close.vue';

const people = [
  { id: 0, name: 'Open', online: false },
  { id: 3, name: 'Closed', online: false },
  { id: 1, name: 'Resolved', online: false },
  { id: 2, name: 'In Progress', online: false }, 
]

const selected = ref([])


const router = useRouter();

    const navigateToPage = (path) => {
      router.push(path);
    };

setInterval(() => {
    console.log(selected.value);
},4000)



const Billings = [
  { id: 19393838, Priority: 0, Assignee: 'kashif sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 0, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Ali', description: 'Lorem ipsum Lorem ipsum ', status: 2, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'usman sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 1, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Mohammed sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 3, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Noor sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 1, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Tahir sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 1, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Hossain sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 3, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Noman sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 2, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Naeem sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 1, created_at:'03/05/2023', completed_at:'05/05/2023' },
  { id: 19393838, Priority: 0, Assignee: 'Hamza sulehria', description: 'Lorem ipsum Lorem ipsum ', status: 2, created_at:'03/05/2023', completed_at:'05/05/2023' },
  // More people...
]
</script>