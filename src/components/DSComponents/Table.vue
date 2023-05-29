<template>
  <div class="">
 
     <table class="min-w-full divide-y divide-gray-300 pl-4">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-8 pr-3 text-left text-sm font-light text-gray-600 ">Sales Rep Name</th>
                <th scope="col" class="pl-4 py-3.5 text-left text-sm font-light text-gray-600">£ Contacted Users</th>
                <th scope="col" class="pl-4 py-3.5 text-left text-sm font-light text-gray-600">£ Open tickets</th> 
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="person in people" :key="person.email">
                <td class="whitespace-nowrap py-4 pl-8  text-sm  text-gray-700 ">{{ person.SelName }}</td>
                <td class="whitespace-nowrap pl-16 py-4  text-sm text-gray-700">{{ person.ContactedUsers }}</td>
                <td class="whitespace-nowrap pl-12 py-4 text-sm text-gray-700">{{ person.OpenTicketsUsers }}</td>
                 
              </tr>
            </tbody>
          </table>
  </div>
</template>

<script setup> 
import { ref, onMounted, computed } from "vue";
import client from '../../axios.config';

const people = ref([]);
 


   onMounted(async () => {
      try {
        const response = await client.get("/Chart/SalesRepActivities");
      
        people.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });
</script>