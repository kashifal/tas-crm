<template>
  <nav aria-label="Progress" class="max-w-6xl mx-auto">
    <ol role="list" class="flex px-2 py-16">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative']"
      >
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-primary" />
            <div class="h-3 w-3 bg-primary absolute right-[6%] md:right-[15%] rounded-full" />
          </div>
          <div
            
            @click="setMyStep(step)"
            class="relative flex cursor-pointer w-32 h-8 px-4 items-center justify-center rounded-md bg-primary hover:bg-primary py-6"
          >
            <!-- <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" /> -->
            <span class="text-white font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </div>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
            <div
              class="h-3 w-3 bg-white ring-1 ring-primaryGray absolute right-[6%] md:right-[15%] rounded-full"
            />
          </div>
          <div
            
            @click="setMyStep(step)"
            class="relative flex h-8 w-32 cursor-pointer bg-primaryGray px-4 items-center justify-center rounded-md border-primary py-6"
            aria-current="step"
          >
            <!-- <span class="h-2.5 w-2.5 rounded-md bg-primary" aria-hidden="true" /> -->
            <span class="font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </div>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
            <div
              class="h-3 w-3 bg-white ring-1 ring-primaryGray absolute right-[6%] md:right-[15%] rounded-full"
            />
          </div>
          <div
          
            @click="setMyStep(step)"
            class="group relative flex cursor-pointer h-8 w-32 bg-primaryGray px-4 items-center justify-center rounded-md py-6 hover:border-gray-400"
          >
           
            <span class="font-md text-sm whitespace-nowrap">{{ step.name }}</span>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import client from "../../axios.config";
import {ref, onMounted} from 'vue';
import {useSelectedComp} from '../../store/selectedCompany';


const selectCompany = useSelectedComp();


console.log('step',selectCompany.companyDetail );

const getTagName = () => {
  try {
    const parsedStatus = JSON.parse(selectCompany.companyDetail.Status);
    return parsedStatus.name; // Assuming you want to display the "name" field from the parsed JSON

    
  } catch (error) {
    console.error('Error parsing name:', error);
    return 'No Tag';
  }
}

const status = getTagName();
const status1 = 4;

console.log(status);

const steps = ref([
  { name: "New", href: "#", status: "complete" },
  { name: "Follow-up", href: "#", status: "complete" },
  { name: "Under Review", href: "#", status: "complete" },
  { name: "Demo", href: "#", status: "current" },
  { name: "Negotiation", href: "#", status: "upcoming" },
  { name: "Won/Lost", href: "#", status: "upcoming" }
]);


onMounted((step) => {
  const stepIndex = steps.value.findIndex(item => item.name === step);

  console.log(stepIndex, 'cool');
  if (stepIndex > -1) {
    if (steps.value[stepIndex].status === 'complete') {
      // Revert the clicked step to upcoming
      steps.value[stepIndex].status = 'upcoming';

      // Reset all subsequent steps
      for (let i = stepIndex + 1; i < steps.value.length; i++) {
        steps.value[i].status = 'upcoming';
      }
    } else {
      // Set the clicked step as complete
      steps.value[stepIndex].status = 'complete';

      // Mark all previous steps as complete
      for (let i = 0; i < stepIndex; i++) {
        steps.value[i].status = 'complete';
      }
    }
  }
})

async function setMyStep(step) {

 const stepIndex = steps.value.findIndex(item => item.name === step.name);

 console.log(stepIndex);

 console.log(stepIndex);
  if (stepIndex > -1) {
    if (steps.value[stepIndex].status === 'complete') {
      // Revert the clicked step to upcoming
      steps.value[stepIndex].status = 'upcoming';

      // Reset all subsequent steps
      for (let i = stepIndex + 1; i < steps.value.length; i++) {
        steps.value[i].status = 'upcoming';
      }
    } else {
      // Set the clicked step as complete
      steps.value[stepIndex].status = 'complete';

      // Mark all previous steps as complete
      for (let i = 0; i < stepIndex; i++) {
        steps.value[i].status = 'complete';
      }
    }
  }
  try {
    const response = await client.post("/Contact/ChangeStatus/1", {
      status: step
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}



</script>