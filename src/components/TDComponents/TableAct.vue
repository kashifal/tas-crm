<template>
  <div class="bg-[#EFEFF0] rounded-lg">
    <div class="flex sm:items-center gap-4 justify-between pt-4 items-center px-4">
      <div class="sm:flex-auto">
        <router-link
          to="#"
          class="px-4 py-1.5 bg-primary text-white rounded-full font-normal text-sm"
        >Add Company</router-link>
      </div>
      <div class="sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          to="#"
          class="px-4 flex gap-2 py-1 bg-transparent border border-gray-300 text-gray-500 rounded-full font-normal text-sm"
        >
          <Filter />Filter
        </button>
      </div>
    </div>
    <div v-if="loading === false" class="mt-4 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr class="divide-x divide-gray-100">
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-[#5C656A] sm:pl-6"
                  >Name</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Email</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Tags</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Sales Rep</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Phone Number</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Sign up Date</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Status</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Subscription</th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-normal text-[#5C656A]"
                  >Subscription Price</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="company in companies"
                  :key="company.email"
                 
                  class="divide-x divide-gray-100 hover:bg-gray-100 cursor-pointer"
                   @click="setTableValue(company)"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >{{ company.CompanyName }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ company.Email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <router-link
                      to="#"
                    >
                     {{ getTagName(company.Status) }}
                    </router-link>
                  </td>
                  <td
                    class="whitespace-nowrap flex gap-1 items-center px-3 py-4 text-sm text-gray-500"
                  >
                    <!-- {{ company.SalesRep }} -->
                    <div
                      class="h-6 w-6 flex items-center justify-center rounded-full bg-[#5BE0C8] text-white text-xs"
                    >YM</div>lorem
                  </td>

                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >{{ company.SignUpDate }}</td>

                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >{{ company.PhoneNumber }}</td>

                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <router-link
                      to="#"
                    >   {{ getStatus(company.Status) }} </router-link>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >{{ company.Subscription }}</td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >{{ company.SubscriptionPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> 

    <div v-else class="  max-w-full px-4 py-8 w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import client from "../../axios.config";
import Filter from "@/components/svgs/Filter.vue";
const companies = ref([]);
import { useRouter } from 'vue-router'; // Import the useRouter function

const loading = ref(false);
import {useSelectedComp} from '../../store/selectedCompany.js';

    const router = useRouter(); // Assign the router instance

const selectCompany = useSelectedComp();

onMounted(async () => {
    loading.value = true;
  try {
    const response = await client.get("/Company/GetCompany");
    console.log(response.Company);
    companies.value = response.Company;
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
});

function setTableValue(tableRowData){
  selectCompany.setCompany(tableRowData);
  router.push({ name: 'CompanyDetail' , params: { tableData: tableRowData }});  
}

const getStatus = (status) => {
  try {
    const parsedStatus = JSON.parse(status);
    return parsedStatus.status; // Assuming you want to display the "name" field from the parsed JSON
  } catch (error) {
    console.error('Error parsing status:', error);
    return 'No Status';
  }
}

const getTagName = (tag) => {
  try {
    const parsedStatus = JSON.parse(tag);
    return parsedStatus.name; // Assuming you want to display the "name" field from the parsed JSON
  } catch (error) {
    console.error('Error parsing name:', error);
    return 'No Tag';
  }
}
 
</script>