  
<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-200/60" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-gray-900" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-gray-400/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> -->
                  <Logo />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            :class="[item.current ? 'text-primary' : 'text-iconColor hover:text-primary', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']"
                          >
                            <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="mt-auto">
                      <div class="h-10 w-10 rounded-full relative">
                        <div
                          class="h-3 w-3 rounded-full bg-green-600 absolute top-0 ring-1 ring-white right-0"
                        ></div>
                        <img
                          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                          class="object-cover w-auto h-full rounded-full"
                          alt
                        />
                      </div>
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
              <ul role="list" class="-mx-2 space-y-4">
                <li v-for="item in navigation" :key="item.name" class="">
                  <a
                    :href="item.href"
                    :class="[item.current ? 'text-primary border-r-2 border-primary' : 'text-iconColor  hover:text-red-500', 'group flex gap-x-3 py-1 px-6 text-sm leading-6 font-semibold']"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </li>

            <li class="mt-auto mb-4">
              <div class="h-10 w-10 rounded-full relative">
                <div
                  class="h-3 w-3 rounded-full bg-green-600 absolute top-0 ring-1 ring-white right-0"
                ></div>
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  class="object-cover w-auto h-full rounded-full"
                  alt
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-[72px] ">
      <div
        class="sticky  top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
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
            <div class="flex mx-auto">
              <!-- <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label> -->
              <div class="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block rounded-full px-4 border-0 py-1.5 text-gray-900 shadow-sm md:w-96 w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>

            <!-- Country Selector -->
            <div class="flex items-center gap-x-16">
            <div class>
              <Listbox as="div" v-model="selected">
                <!-- <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Assigned to</ListboxLabel> -->
                <div class="relative ">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-full bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <span class="flex items-center">
                      <selected.icon />
                      
                      <!-- <span class="ml-3 block truncate">{{ selected.name }}</span> -->
                      
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in people"
                        :key="person.id"
                        :value="person"
                        v-slot="{ active }"
                      >
                        <li
                          :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none  pl-6  py-2 ']"
                        >
                           
                          <selected.icon />
                            
                     
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>

            <!-- bellIcon -->

            <BellIconO />
            </div>
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
  XMarkIcon
} from "@heroicons/vue/24/outline";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Logo from "@/components/svgs/Logo.vue";
import Dashboard from "@/components/svgs/Dashboard.vue";
import Ads from "@/components/svgs/Ads.vue";
import users from "@/components/svgs/users.vue";
import Settings from "@/components/svgs/Settings.vue";
import Play from "@/components/svgs/Play.vue";
import MenuIcon from "@/components/svgs/Menu.vue";
import Usa from '@/components/svgs/Usa.vue';
import BellIconO from '@/components/svgs/BellIcon.vue'


const navigation = [
  { name: "Dashboard", href: "/", icon: Dashboard, current: true },
  { name: "Companies", href: "#", icon: Ads, current: false },
  { name: "Contacts", href: "#", icon: users, current: false },
  { name: "Tickets", href: "/tickets-billing", icon: Settings, current: false }
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
];

const people = [
  { id: 1, name: "Wade Cooper", online: true , icon: Usa},
  { id: 2, name: "Arlene Mccoy", online: false, icon: Usa },
];

const selected = ref(people[0]);
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" }
];

const sidebarOpen = ref(false);
</script>