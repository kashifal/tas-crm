<template>
  <div class="w-full   rounded-2xl ring-1 ring-gray-200 overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 px-6 pt-4 gap-4">
      <div class="md:col-span-2 flex items-center gap-4">
        <div
          class="h-12 text-white font-bold tracking-widest flex items-center justify-center w-12 rounded-full bg-orange-500"
        >{{abbreviation}}</div>
        <div class>
          <h1>{{companyName}}</h1>
        </div>
      </div>
     <div class="col-span-3 flex md:items-center justify-between md:flex-row flex-col gap-4 md:gap-0 mt-4 md:mt-0">
      <div class="">
            <span class="text-sm">Status: <span class="text-primaryGreen pl-2">Active</span></span> <br>
            <span class="text-sm">Assigned Sales Rep. <span class="text-primaryGreen pl-2">Amr Ismail</span></span>
      </div>
      <div class="  ">
            <span class="text-sm">Subscription <span class="text-primaryGreen pl-2">Tier 1</span></span> <br>
            <span class="text-sm">Frequency <span class="text-primaryGreen pl-2">Monthly</span></span>
      </div>
      <div class=" md:flex  items-center justify-end ">
           <h1 class="text-primary font-semibold text-2xl">450 L.E</h1>
      </div>
      </div>
    </div>

    <div class="bg-primaryGray px-4 py-4 mt-4 border-t border-gray-300">
        <div class="w-full h-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
                <ul class="flex flex-col gap-4">
                    <li>
                        <p class="text-slate-500 text-sm">Contact</p>
                        <p class="text-sm">Amr Ismail</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Phone</p>
                        <p class="text-sm">0100004400</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Industry</p>
                        <p class="text-sm">Manufacturing</p>
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
                        <p class="text-sm">March 5, 2023</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Last Contacted</p>
                        <p class="text-sm">March 5, 2023</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Last Update by:</p>
                        <p class="text-sm">Amr Ismail (sales)</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Updated At</p>
                        <p class="text-sm">March 5, 2023</p>
                    </li>
                </ul>
            </div>
             <div class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
                <ul class="flex flex-col gap-4">
                    <li>
                        <p class="text-slate-500 text-sm">Sign Up Date</p>
                        <p class="text-sm">March 5, 2023</p>
                    </li>

                    <li>
                        <p class="text-slate-500 text-sm">Free Trial Start Date</p>
                        <p class="text-sm">March 5, 2023</p>
                    </li>

                   

                    <li>
                        <p class="text-slate-500 text-sm">Number of Employees</p>
                        <p class="text-sm">55</p>
                    </li>

                     <li>
                        <p class="text-slate-500 text-sm">System Currency</p>
                        <p class="text-sm">EGP</p>
                    </li>
                </ul>
            </div>
             <div class="">
                <ul class="flex flex-col gap-4">
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
                    <li class="bg-white ring-1 ring-gray-300 px-4 py-4 rounded-2xl">
                        <div class="flex flex-col gap-4">
                        <p class="text-slate-500 text-sm">Reminders</p>
                        <p class="text-sm ">March 3, 2023 - Zoom meeting</p>
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
  </div>
</template>

<script setup>
const companyName = "Indus Code";
import ActivitiesIcon from '@/components/svgs/ActivitiesIcon.vue';
const words = companyName.split(" ");
let abbreviation = "";

words.forEach(word => {
  abbreviation += word.charAt(0);
});
 
</script>

<style lang="scss" scoped>
</style>