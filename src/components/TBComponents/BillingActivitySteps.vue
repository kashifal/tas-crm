<template>
  <div>
      <BillingTable />
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import BillingTable from '@/components/TBComponents/BillingTable.vue';

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