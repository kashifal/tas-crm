import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '@/views/Dashboard.vue';
import Ads from '@/views/AdsView.vue';
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Dashboard
        },
        {
            path: '/ads',
            name: 'Ads',
            component: Ads
        }
    ]
})

export default router;
