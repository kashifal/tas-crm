import { createRouter, createWebHistory } from "vue-router";
import CompanyDetail from '@/views/CompanyDetail.vue';
import TicketsBilling from '@/views/TicketsBilling.vue';
import BillingInfo from '@/views/BillingInfo.vue';
import Authenticate from '@/views/Authenticate.vue';
import Dashboard from '@/views/Dashboard.vue';
import TicketDetail from '@/views/TicketDetail.vue';
import Notfound from '@/views/404.vue';
import CompaniesPage from '@/views/CompaniesPage.vue';
import { useAuthenticate } from "../store/Authenticate";

const redirectToHomeOnLoggedIn = (to, from, next) => {
  if (useAuthenticate().isLoggedIn) next({ name: "index" });
  else next();
};

const isAuthenticated = () => {
  const authStore = useAuthenticate();
  return authStore.isLoggedIn;
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: { requireAuth: true }
    },
    {
      path: '/tickets-billing',
      name: 'tickets-billing',
      component: TicketsBilling,
      meta: { requireAuth: true } // Requires authentication
    },
    {
      path: '/billing-info',
      name: 'billing-info',
      component: BillingInfo,
      meta: { requireAuth: true } // Requires authentication
    },
    {
      path: '/auth',
      name: 'authenticate',
      component: Authenticate
    },
    {
      path: '/CompanyDetail',
      name: 'CompanyDetail',
      component: CompanyDetail,
      props: (route) => ({ tableData: route.params.tableData }),
      meta: { requireAuth: true } // Requires authentication
    },
    {
      path: '/ticket-details',
      name: 'ticketsDetail',
      component: TicketDetail,
      meta: { requireAuth: true } // Requires authentication
    },
    {
      path: '/companies-page',
      name: 'companiesPage',
      component: CompaniesPage,
      meta: { requireAuth: true } // Requires authentication
    },
    {
      path: '/:catchAll(.*)',
      component: Notfound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !isAuthenticated()) {
    next({ name: "authenticate" }); // Redirect to login page if not logged in
  } else {
    next(); // Proceed with navigation
  }
});

export default router;
