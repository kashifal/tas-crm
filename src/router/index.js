import { createRouter, createWebHistory } from "vue-router"; 
// import Ads from '@/views/AdsView.vue';
import CompanyDetail from '@/views/CompanyDetail.vue';
import  TicketsBilling from '@/views/TicketsBilling.vue';
import BillingInfo from '@/views/BillingInfo.vue';
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'CompanyDetail',
            component: CompanyDetail
        },
        {
            path: '/tickets-billing',
            name: 'tickets-billing',
            component: TicketsBilling
        },
        {
            path: '/billing-info',
            name: 'billing-info',
            component: BillingInfo
        },
        
    ]
})

export default router;
