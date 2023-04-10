  
<template>
  <div>
     <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-200/60" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-gray-400/10">
                <div class="flex h-16 shrink-0 items-center">
                  <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
                   <Logo />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a :href="item.href" :class="[item.current ? 'bg-primary text-white' : 'text-iconColor hover:text-white hover:bg-primary', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    
                    <li class="mt-auto">
                     <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primary bg-primary/20"
              >
                <Play class="h-6 w-6 shrink-0" aria-hidden="true" />
                  <h1>Watch</h1>

              </a>
               <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 mt-4 text-sm font-semibold leading-6 text-iconColor hover:bg-primary/20 hover:text-primary"
              >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" viewBox="0 0 48 48"><g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M23.9917 6H6V42H24"/><path d="M33 33L42 24L33 15"/><path d="M16 23.9917H42"/></g></svg>
                  <h1>Logout</h1>
              </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed bg-red-400 lg:inset-y-0 lg:z-50 lg:flex lg:w-w18 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex lg:h-full h-screen grow flex-col gap-y-5 overflow-y-auto bg-white px-3 pb-4 shadow"
      >
        <div class="flex h-16 shrink-0 justify-center items-center">
          <!-- <img   :src="Logo" alt="Your Company" /> -->
          <Logo />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7 items-center">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name" class>
                  <a
                    :href="item.href"
                    :class="[item.current ? 'bg-primary text-white' : 'text-iconColor hover:text-white hover:bg-primary', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li class="mt-auto mb-4">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-primary bg-primary/20"
              >
                <Play class="h-6 w-6 shrink-0" aria-hidden="true" />
           
              </a>
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 mt-4 text-sm font-semibold leading-6 text-iconColor hover:bg-primary/20 hover:text-primary"
              >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0" viewBox="0 0 48 48"><g fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M23.9917 6H6V42H24"/><path d="M33 33L42 24L33 15"/><path d="M16 23.9917H42"/></g></svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-[72px] bg-gray-50">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-iconColor lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6 text-iconColor" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1 items-center gap-4">
            <Dashboard classes="h-7 w-7" strok="#27B78D" />
            <h1 class="font-medium text-xl text-iconColor">Dashboard</h1>
          </div>
        </div>
      </div>

      <main class="md:py-10 py-12">
        <div class="px-2 sm:px-6 lg:px-8">
          <slot />
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
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon, 
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Logo from "@/components/svgs/Logo.vue";
import Dashboard from "@/components/svgs/Dashboard.vue";
import Ads from "@/components/svgs/Ads.vue";
import users from "@/components/svgs/users.vue";
import Settings from "@/components/svgs/Settings.vue";
import Play from "@/components/svgs/Play.vue";
import MenuIcon from "@/components/svgs/Menu.vue";


const navigation = [
  { name: "Dashboard", href: "#", icon: Dashboard, current: true },
  { name: "Ads", href: "#", icon: Ads, current: false },
  { name: "Leads", href: "#", icon: users, current: false },
  { name: "My Account", href: "#", icon: Cog6ToothIcon, current: false }
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" }
];

const sidebarOpen = ref(false);
</script>