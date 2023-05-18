<template>
  <nav aria-label="Progress" class="overflow-hidden">
    <ol role="list" class="overflow-hidden">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
      >
        <template v-if="step.status === 'complete'">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-primary"
            aria-hidden="true"
          />
          <a :href="step.href" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary group-hover:bg-indigo-800"
              >
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-primary/60"
            aria-hidden="true"
          />
          <a :href="step.href" class="group relative flex items-start mb-2" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary/20"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </span>
            <span
              class="ml-4 min-w-0 flex-col  ring-1 mt-1 ring-slate-100 mr-4 w-full p-3 rounded-md shadow-md grid md:grid-cols-2 gap-8 md:gap-4"
            >
              <div class="space-y-4">
                <div class>
                  <h1 class="text-sm text-gray-600">
                    Deal:
                    <span class="text-primary">DEAL</span>
                  </h1>
                </div>

                <div class>
                  <h1 class="text-sm font-light flex">
                    Deal Prediction:
                    <div class="flex items-center pl-2">
                      <div class="h-2 w-2 rounded-full bg-gray-300"></div>
                      <span class="text-gray-400 font-light pl-2">2 hours</span>
                    </div>
                  </h1>
                </div>
                <div class>
                  <h1 class="text-sm text-gray-600 font-light">
                    Updated to:
                    <span class="text-primary">kashif</span>
                  </h1>
                </div>
              </div>
              <div class="flex items-center md:justify-end justify-between ">
                <div class="flex items-center justify-between md:justify-end gap-12 w-full">
                  <div class>
                    <h1 class="text-sm text-gray-600 font-light">
                      Updated by:
                      <span class="text-black font-medium">Amr Esmail</span>
                    </h1>
                  </div>

                  <div class="flex items-center gap-2">
                    <div
                      class="h-7 w-7 ring-2 ring-gray-400 rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-400"
                      >
                        <path
                          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                        />
                        <path
                          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                        />
                      </svg>
                    </div>
                    <div
                      class="h-7 w-7 ring-2 ring-gray-400 rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4 text-gray-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </a>
        </template>
        <template v-else>
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
            aria-hidden="true"
          />
          <a :href="step.href" class="group relative flex items-start">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400"
              >
                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

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