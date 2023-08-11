import { defineStore } from "pinia";

export const useTab = defineStore('tabs', {
    state: () => ({
        currentTab: 0,
        load:true
       
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        setTab(index) {
            
                this.currentTab = index; 
                console.log(index);

                setTimeout(() => {
                    this.load  = false
                }, 3000)
            
        },
        
         
    },
})