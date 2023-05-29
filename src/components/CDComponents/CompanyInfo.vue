<template>
  <div class="w-full rounded-2xl ring-1 ring-gray-200 overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 px-6 pt-4 gap-4">
      <div class="md:col-span-2 flex items-center gap-4">
        <div
          class="h-12 text-white font-bold tracking-widest flex items-center justify-center w-12 rounded-full bg-orange-500"
        >{{abbreviation}}</div>
        <div class>
          <h1>{{data.CompanyName}}</h1>
        </div>
      </div>
      <div
        class="col-span-3 flex md:items-center justify-between md:flex-row flex-col gap-4 md:gap-0 mt-4 md:mt-0"
      >
        <div class>
          <span class="text-sm">
            Status:
            <span class="text-primaryGreen pl-2">{{ getStatus(data.Status) }}</span>
          </span>
          <br />
          <span class="text-sm">
            Assigned Sales Rep.
            <span class="text-primaryGreen pl-2">{{data.AssignedSalesRep}}</span>
          </span>
        </div>
        <div class>
          <span class="text-sm">
            Subscription
            <span class="text-primaryGreen pl-2">{{data.Subscription }}</span>
          </span>
          <br />
          <span class="text-sm">
            Frequency
            <span class="text-primaryGreen pl-2">{{data.Frequency}}</span>
          </span>
        </div>
        <div class="md:flex items-center justify-end">
          <h1 class="text-primary font-semibold text-2xl">{{data.SubscriptionPrice}} L.E</h1>
        </div>
      </div>
    </div>

    <div v-if="loading === false" class="bg-primaryGray px-4 py-4 mt-4 border-t border-gray-300">
      <div class="w-full h-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <div class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-slate-500 text-sm">Contact</p>
              <p class="text-sm">{{data.Contact}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Phone</p>
              <p class="text-sm">{{data.Phone}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Industry</p>
              <p class="text-sm">{{data.Industry}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Number of Employees</p>
              <p class="text-sm">55</p>
            </li>
          </ul>
        </div>
        <div class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-slate-500 text-sm">Last Active</p>
              <p class="text-sm">{{data.LastActive}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Last Contacted</p>
              <p class="text-sm">{{data.LastContacted}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Last Update by:</p>
              <p class="text-sm">{{data.LastUpdatedBy}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Updated At</p>
              <p class="text-sm">{{data.LastUpdated}}</p>
            </li>
          </ul>
        </div>
        <div class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
          <ul class="flex flex-col gap-4">
            <li>
              <p class="text-slate-500 text-sm">Sign Up Date</p>
              <p class="text-sm">{{data.SignUpDate}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Free Trial Start Date</p>
              <p class="text-sm">{{data.FreeTrialStartDate}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">Free Trial End Date</p>
              <p class="text-sm">{{data.FreeTrialEndDate}}</p>
            </li>

            <li>
              <p class="text-slate-500 text-sm">System Currency</p>
              <p class="text-sm">{{data.SystemCurrency}}</p>
            </li>
          </ul>
        </div>
        <div class>
          <ul class="flex flex-col gap-4">
            <li class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
              <div class="flex items-center justify-between">
                <p class="text-slate-500 text-sm">Open Ticket</p>
                <p class="text-sm text-primaryGreen">{{data.OpenTickets}}</p>
              </div>

              <div class="flex items-center mt-3 justify-between">
                <p class="text-slate-500 text-sm">Closed Ticket</p>
                <p class="text-sm text-primaryGreen">{{data.closedTickets}}</p>
              </div>
            </li>
            <li class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
              <div class="flex flex-col gap-4">
                <p class="text-slate-500 text-sm">Reminders</p>
                <p class="text-sm">{{data.Reminder}}</p>
              </div>
            </li>
            <li class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
              <div class="flex items-center justify-between">
                <p class="text-slate-500 text-sm">Open Ticket</p>
                <p class="text-sm text-primaryGreen">13</p>
              </div>

              <div class="flex items-center mt-3 justify-between">
                <p class="text-slate-500 text-sm">Closed Ticket</p>
                <p class="text-sm text-primaryGreen">13</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="  max-w-full px-4 py-8 w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-300 rounded col-span-3"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-1"></div>
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
const companyName = "Indus Code";
import ActivitiesIcon from "@/components/svgs/ActivitiesIcon.vue";

import client from "../../axios.config";
const loading = ref(false);
import { ref, onMounted } from "vue";
const data = ref({});
let abbreviation = "";
import {useSelectedComp} from '../../store/selectedCompany.js';


const selectCompany = useSelectedComp();

const message = ref(false);
const words = selectCompany?.companyDetail?.CompanyName?.split(" ");

words?.forEach(word => {
  abbreviation += word.charAt(0);
});


console.log('company info page',selectCompany.companyDetail );

 
 

onMounted(async (id) => {
  loading.value = true;
  try {
    const response = await client.get("/Contact/GetContact/1");
    data.value = response.Contact[0]; 
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false; 
  }
});


const getStatus = (status) => {
  try {
    const parsedStatus = JSON.parse(status);
    return parsedStatus.status; // Assuming you want to display the "name" field from the parsed JSON
  } catch (error) {
    console.error('Error parsing status:', error);
    return 'No Status';
  }
}

 

const getTagName = () => {
  try {
    const parsedStatus = JSON.parse(selectCompany.companyDetail.Status);
    return parsedStatus.name; // Assuming you want to display the "name" field from the parsed JSON

    
  } catch (error) {
    console.error('Error parsing name:', error);
    return 'No Tag';
  }
}

const status = getTagName();

console.log(status);

</script>

<style lang="scss" scoped>
</style>