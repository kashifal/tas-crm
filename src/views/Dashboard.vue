<template>
  <div class="px-4 lg:px-8">
  <h1 class="text-xl font-semibold pb-4 text-gray-800">Account Settings</h1>
  <div
    class="mx-auto border border-gray-300 bg-white max-w-7xl lg:flex lg:gap-x-16 lg:px-8"
  >
    <main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-8">
      <div
        class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none"
      >
        <div>
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Profile</h2>

          <dl
            class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
          >
            <div class="pt-6 sm:flex">
              <dt
                class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
              >
                Email
              </dt>
              <dd
                class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
              >
                <div class="text-gray-900">tom.cook@example.com</div>
                <button
                  type="button"
                  class="font-normal text-primary hover:text-primary"
                >
                  Edit
                </button>
              </dd>
            </div>
            <div class="pt-6 sm:flex">
              <dt
                class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
              >
                Password
              </dt>
              <dd
                class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
              >
                <div class="text-gray-900">********</div>
                <button
                  type="button"
                  class="font-normal text-primary hover:text-primary"
                >
                  Edit
                </button>
              </dd>
            </div>

            <div class="pt-6 sm:flex">
              <dt
                class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
              >
                Timezone
              </dt>
              <dd
                class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
              >
                <Select />
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <ul role="list" class="mt-6 border-gray-200 text-sm leading-6">
            <dl
              class="mt-6 space-y-6 divide-gray-100 border-t border-gray-200 text-sm leading-6"
            >
              <div class="pt-6 sm:flex">
                <dt
                  class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
                >
                  Dashboard Notification
                  <p class="text-xs text-gray-400 font-light">
                    Status update emaills
                  </p>
                </dt>
                <dd
                  class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
                >
                  <fieldset>
                    <legend class="sr-only">Notifications</legend>
                    <div class="space-y-5">
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label
                            for="comments"
                            class="font-medium text-gray-900"
                            >Bandwidth use alert when close to limit</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="candidates"
                            aria-describedby="candidates-description"
                            name="candidates"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label
                            for="candidates"
                            class="font-medium text-gray-900"
                            >Subscription notifications when renewal
                            fails</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="offers"
                            aria-describedby="offers-description"
                            name="offers"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label for="offers" class="font-medium text-gray-900"
                            >Proxy use statistics (1 email/month)</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="offers"
                            aria-describedby="offers-description"
                            name="offers"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label for="offers" class="font-medium text-gray-900"
                            >Proxy warnings for any anomalies</label
                          >
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </dd>
              </div>
              <div class="pt-6 sm:flex">
                <dt
                  class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
                >
                  Marketing Emails
                  <p class="text-xs text-gray-400 font-light">
                    Useful guides & surveys
                  </p>
                </dt>
                <dd
                  class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
                >
                  <fieldset>
                    <legend class="sr-only">Notifications</legend>
                    <div class="space-y-5">
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label
                            for="comments"
                            class="font-medium text-gray-900"
                            >Guides & Tips/Tricks (~1 mail/month)</label
                          >
                        </div>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input
                            id="candidates"
                            aria-describedby="candidates-description"
                            name="candidates"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                        <div class="ml-3 text-sm leading-6">
                          <label
                            for="candidates"
                            class="font-medium text-gray-900"
                            >Surveys (~1 mail/month)</label
                          >
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </dd>
              </div>
            </dl>
          </ul>
        </div>

        <div>
          <dl
            class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
          >
            <div class="pt-6 sm:flex">
              <dt
                class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
              >
                Account Created
              </dt>
              <dd
                class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
              >
                August 07, 2023
              </dd>
            </div>
            <div class="pt-6 sm:flex">
              <dt
                class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"
              >
                Manage Account
              </dt>
              <dd
                class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto"
              >
                <button
                  type="button"
                  class="font-normal rounded-sm hover:bg-red-600 text-xs hover:text-white text-red-600 border border-red-600 px-3 py-1.5"
                >
                  DELETE ACCOUNT
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/20/solid";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import Select from "@/components/Select.vue";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Invoices", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Expenses", href: "#" },
];
const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];

const mobileMenuOpen = ref(false);
const automaticTimezoneEnabled = ref(true);
</script>
