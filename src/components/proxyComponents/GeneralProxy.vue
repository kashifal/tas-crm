<template>
  <form>
    <div class="space-y-12 sm:space-y-16">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div
          class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0"
        >
          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              for="first-name"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Proxy Username</label
            >
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full px-2 rounded-md border-0 focus:outline-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              for="last-name"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Proxy Password</label
            >
            <div class="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full px-2 rounded-md focus:border-0 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-0 sm:text-sm sm:leading-6"
              />
              <p class="text-xs mt-1 text-gray-600">
                Alpha-numeric and minimum 8 characters.
              </p>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Proxy Session Timeout</label
            >
            <div
              class="mt-2 sm:col-span-2 grid grid-cols-3 gap-4 sm:gap-8 sm:mt-0"
            >
              <div class="">
                <input
                  id="email"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">hours</p>
              </div>
              <div class="">
                <input
                  id="number"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">minutes</p>
              </div>
              <div class="">
                <input
                  id="number"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">seconds</p>
              </div>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >Proxy Idle Timeout</label
            >
            <div
              class="mt-2 sm:col-span-2 grid grid-cols-3 gap-4 sm:gap-8 sm:mt-0"
            >
              <div class="">
                <input
                  id="email"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">hours</p>
              </div>
              <div class="">
                <input
                  id="email"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">minutes</p>
              </div>
              <div class="">
                <input
                  id="email"
                  name="number"
                  type="number"
                  autocomplete="number"
                  class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm focus:outline-0 sm:leading-6"
                />
                <p class="text-xs mt-1 text-gray-600">seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        class="inline-flex justify-center rounded-md bg-darkPrimary px-10 py-2 text-sm font-normal text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Save Changes
      </button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
</script>
