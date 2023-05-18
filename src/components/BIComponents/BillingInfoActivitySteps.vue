<template>
  <div class="w-full">
    <div class="grid-cols-5 grid gap-8 p-2">
      <div class="lg:col-span-3 col-span-5 rounded-2xl shadow-md ring-1 ring-gray-200 gap-8 md:gap-0 px-4 py-4 grid grid-cols-3">
        <div class="md:col-span-1 col-span-3">
          <h1 class="font-fold">Current Plan</h1>

          <ul class="space-y-2 mt-4">
            <li>
              <h3>Your current plan basic</h3>
              <p class="text-sm font-light text-gray-500">A simple start for everyone</p>
            </li>
            <li>
              <h3>Active until 09 Dec 2023</h3>
              <p class="text-sm font-light text-gray-500">A simple start for everyone</p>
            </li>
          </ul>
        </div>

        <div class="md:col-span-2 col-span-3 lg:pl-40">
          <div class="bg-orange-50 px-2 py-4 rounded-2xl text-left text-orange-500">
            <h1>We need your attention!</h1>
            <p class="text-base font-light">Your plan require update</p>
          </div>

          <div class="mt-6">
            <div class="flex py-1.5 items-center justify-between">
              <h1 class="text-sm">Days</h1>
              <h1 class="font-normal text-sm">{{goneDays}} days of {{totalDays}}</h1>
            </div>
            <div class="w-full h-2 bg-primary/10 overflow-hidden rounded-full">
              <div :class="[`h-full w-[${val}%] bg-primary rounded-full`]"></div>
            </div>
            <div class="py-1.5">
              <h1 class="font-normal text-sm text-gray-500">{{totalDays - goneDays}} days left</h1>
            </div>
          </div>
        </div>

        <div class="col-span-3 py-10 space-x-2">
          <router-link
            to="#"
            class="bg-primary rounded-2xl font-light text-sm text-white px-4 border-2 border-primary py-2"
          >UPGRADE PLAN</router-link>
          <router-link
            to="#"
            class="bg-white rounded-2xl font-light text-sm text-primary px-4 py-2 border-2 border-primary hover:bg-primary hover:text-white transition-all"
          >CANCEL SUBSCRIPTION</router-link>
        </div>
      </div>
      <div
        class="lg:col-span-2 col-span-5 max-h-[250px] overflow-auto rounded-2xl shadow-md ring-1 ring-gray-200 px-4 py-4"
      >
        <div class="w-full flex justify-between items-center">
          <h1 class="font-fold">Billing Address</h1>
          <router-link
            to="#"
            class="bg-primary rounded-2xl font-light text-sm text-white px-4 border-2 border-primary py-2"
          >EDIT ADDRESS</router-link>
        </div>

        <div class="mt-8">
          <table class="w-full">
            <tbody class>
              <tr class="mt-4">
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
              </tr>
              <tr class>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
              </tr>
              <tr>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
              </tr>
              <tr>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
                <td class="text-sm text-gray-600">March 5, 2023</td>
                <td class="text-sm text-gray-500 font-light">Last Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-5 rounded-2xl shadow-md ring-1 ring-gray-200 px-4 py-4">
        <div class="w-full flex justify-between items-center">
          <h1 class="font-fold">Payment Method</h1>
          <router-link
            to="#"
            class="bg-primary rounded-2xl font-light text-sm text-white px-4 border-2 border-primary py-2"
          >ADD CARD</router-link>
        </div>

        <div class="py-6 px-4 my-4 ring-1 space-y-4 ring-gray-200 rounded-2xl">
          <div class="flex items-center justify-between">
            <h1>
              Amr Ismail
              <span
                class="px-2 py-1 text-sm bg-primary/10 rounded-2xl text-primary ml-2"
              >Primary</span>
            </h1>
            <div class="space-x-4">
              <router-link
                to="#"
                class="bg-primary/10 text-primary px-4 rounded-2xl py-1 text-sm"
              >EDIT</router-link>
              <router-link
                to="#"
                class="bg-white border border-primary text-primary px-4 rounded-2xl py-1 text-sm"
              >DELETE</router-link>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <h1 class="text-sm text-gray-600">**** **** 2256</h1>
            <div class="space-x-4">
              <h1 class="text-sm text-gray-600">Card expires at 12/24</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import BillingTable from "@/components/TBComponents/BillingTable.vue";
const totalDays = 30;
const goneDays = 24;

const val = (goneDays / totalDays) * 100;

const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "current"
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "current"
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "current"
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "current"
  },
  {
    name: "Preview",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "current"
  }
];
</script>