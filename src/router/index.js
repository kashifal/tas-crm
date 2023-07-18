import { createRouter, createWebHistory } from "vue-router";
 
import Dashboard from '@/views/Dashboard.vue'; 
import Notfound from '@/views/404.vue'; 
import { useAuthenticate } from "../store/Authenticate";
import Login from '../views/Login.vue';
import Leaderboard from '../views/Leaderboard.vue';
import  Profile from '../views/Profile.vue';

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
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/leadersboard',
      name: 'leadersboard',
      component: Leaderboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }, 
    {
      path: '/:catchAll(.*)',
      component: Notfound
    }
  ]
});

// router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth && !isAuthenticated()) {
    // next({ name: "authenticate" }); // Redirect to login page if not logged in
  // } else {
    // next(); // Proceed with navigation
  // }
// });

export default router;
