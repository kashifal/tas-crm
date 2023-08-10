import { createRouter, createWebHistory } from "vue-router";
 
import Dashboard from '@/views/Dashboard.vue'; 
import Notfound from '@/views/404.vue'; 
import { useAuthenticate } from "../store/Authenticate";
import Login from '../views/Login.vue';
import Leaderboard from '../views/Leaderboard.vue';
import  Profile from '@/views/Profile.vue';
import ProxyList from '@/views/ProxyList.vue'
import ProxySettings from '@/views/ProxySettings.vue';
import  Register from '@/views/Register.vue';
import Customizze from '@/views/Customizze.vue'
import Components from '@/views/Components.vue'

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
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/proxy-list',
      name: 'proxylist',
      component: ProxyList
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }, 
    {
      path: '/proxy-settings',
      name: 'proxysettings',
      component: ProxySettings
    }, 
    {
      path: '/customize',
      name: 'customize',
      component: Customizze
    }, 
    {
      path: '/components',
      name: 'components',
      component: Components
    }, 
    {
      path: '/:catchAll(.*)',
      component: Notfound
    }
  ]
});

 

export default router;
