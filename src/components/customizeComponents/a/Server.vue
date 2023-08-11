
<template>
  <div>
      
    <div class="block">
    <div class="flex items-center gap-2">
    <div class="h-5 w-5 bg-darkPrimary flex items-center justify-center text-xs text-white rounded-full">1</div>
     <label for="tabs" class="text-lg font-semibold">Select Proxy Details</label>
     </div>
     <p class="text-xs py-2">
      Not sure which proxy type is the best for you? <a href="#" class="text-darkPrimary">Learn More</a>
      </p>
     <p></p>
      <div class="border-b border-gray-200">
        <nav class="-mb-px w-fulll overflow-scroll max-w-full  flex justify" aria-label="Tabs">
          <a v-for="(tab,index) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-darkPrimary text-darkPrimary' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'sm:w-[33.33%] w-[200px]    border-b-2 mt-4  py-8 px-1 text-center text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined" @click="() => setTab(tab.name,index)">
            <div :class="[tab.current ? 'border border-darkPrimary shadow-lg bg-white' : 'border border-gray-300 ' ,  ' w-[100%] overflow-hidden relative  px-3 py-2 rounded-lg ']">
            <!-- Tabs -->
            <span v-if="tab.current" class="absolute right-0 top-0 p-2 bg-darkPrimary">
            <svg height="20" width="20" fill="white" class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1nt52f4" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>
            </span>
             <span class="text-sm  block text-left font-bold">{{ tab.name }}</span>
          <span class="text-sm block text-left font-light mt-2">{{ tab.desc }}</span>

          <span class="block text-xs  font-light text-left mt-8">
          <span class="block mb-2">Starting at</span>
          ${{ tab.price }}/mo
          </span>


          <div v-if="tab.discount" class="px-4 py-1.5 my-4 sm:my-0 sm:absolute bottom-2 text-xs font-light right-2 rounded-full text-white bg-[#fc9800]">
          60% off
          </div>
          </div>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useTab} from '../../../store/tab';

const tabs = ref([
  { name: 'Proxy Server', href: '#', current: true, desc:'Fast & Affordable datacenter proxies', price:'2.99', discount:false },
  { name: 'Static Residential', href: '#', current: false, desc:'Fast & Affordable datacenter proxies', price:'2.99', discount:false },
  { name: 'Residential', href: '#', current: false, desc:'Fast & Affordable datacenter proxies', price:'2.99', discount:true }, 
]);


const  tab = useTab();





const currentTab = ref(0); 

function setTab(tabName,index) {
  tab.setProxy(index+1);
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