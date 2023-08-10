<template>
  <div class="">
     
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
           <div class="flex items-center justify-between">
                <h1 class="font-medium">Your Verified Proxies</h1>
                <button class="px-4 py-2 bg-darkPrimary text-sm rounded-sm  text-white">GET  VERIFIED PROXIES</button>
            </div>

            <p class="text-xs  text-gray-500">
            You do not have verified proxies.


</p>
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
