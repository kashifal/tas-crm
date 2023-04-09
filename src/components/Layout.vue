  
<template>
  <div>
    <!-- Static sidebar for desktop -->
    <div class="fixed lg:inset-y-0 lg:z-50 lg:flex w-w18 lg:flex-col">
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
                <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="pl-[72px] bg-gray-50">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1 items-center gap-4">
            <Dashboard classes="h-7 w-7" strok="#27B78D" />
            <h1 class="font-medium text-xl text-iconColor">Dashboard</h1>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
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
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Logo from "@/components/svgs/Logo.vue";
import Dashboard from "@/components/svgs/Dashboard.vue";
import Ads from "@/components/svgs/Ads.vue";
import users from "@/components/svgs/users.vue";
import Settings from "@/components/svgs/Settings.vue";
import Play from "@/components/svgs/Play.vue";

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