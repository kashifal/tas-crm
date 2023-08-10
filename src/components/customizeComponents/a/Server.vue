
<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="">Select a tab</label>
      
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-darkPrimary focus:ring-darkPrimary">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
     <label for="tabs" class="text-lg font-semibold">Select Proxy Details</label>
     <p class="text-xs py-2">
      Not sure which proxy type is the best for you? <a href="#" class="text-darkPrimary">Learn More</a>
      </p>
     <p></p>
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex justify" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-darkPrimary text-darkPrimary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'w-[33.33%]   border-b-2 mt-4  py-8 px-1 text-center text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined" @click="() => setTab(tab.name)">
            <div class="shadow-lg bg-white px-3 py-2 rounded-lg border border-gray-300">
             <span class="text-sm  block text-left font-bold">{{ tab.name }}</span>
          <span class="text-sm block text-left font-light mt-2">{{ tab.desc }}</span>

          <span class="block text-xs  font-light text-left mt-8">
          <span class="block mb-2">Starting at</span>
          ${{ tab.price }}/mo
          </span>
          </div>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  { name: 'Proxy Server', href: '#', current: true, desc:'Fast & Affordable datacenter proxies', price:'2.99' },
  { name: 'Static Residential', href: '#', current: false, desc:'Fast & Affordable datacenter proxies', price:'2.99' },
  { name: 'Residential', href: '#', current: false, desc:'Fast & Affordable datacenter proxies', price:'2.99' }, 
]);


const currentTab = ref(0); 

function setTab(tabName) {
  if(tabName  === 'Proxy Server'){
    currentTab.value = 0
  }else if(tabName  === 'Static Residential'){
    currentTab.value = 1
  }else if (tabName  === 'Residential'){
    currentTab.value = 2
  } 
  tabs.value.forEach(tab => {
    tab.current = tab.name === tabName;
  });
}
 


</script>