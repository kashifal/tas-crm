<template>
  <div class="flex items-center justify-center flex-col"> 
  <h1>Your are not logged in</h1>
   <div class="flex items-center">
    <button @click="login" :class="['px-4 py-2 bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all', auth.isLoggedIn === true ? 'hidden' : 'block']" >Login</button>  <br><br>
    <button :class="['px-4 py-2 bg-red-100 text-red-700 hover:bg-red-600 transition-all hover:text-white', auth.isLoggedIn === true ? 'block' : 'hidden']" @click="logoutFunc">Logout</button>
     </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Import the useRouter function
import client from '../axios.config';
import {useAuthenticate} from '../store/Authenticate'

export default {
  name: 'Authenticate',
  setup() {
    const token = ref(localStorage.getItem('token') || '');
    const auth = useAuthenticate();

    const router = useRouter(); // Assign the router instance


    async function register(email="kahsidhusain@mail.com", password="123456789",confirmation_password="123456789", firstName="rim", lastName="saad", mobileNumber="01280046319", tierId="1", price="2") {
      try {
        const response = await client.post('http://adminback.tas-technologies.com/api/Registration', {
          email,
          first_name: firstName,
          last_name: lastName,
          mobile_number:mobileNumber,
          password,
          confirmation_password:confirmation_password, 
          tier_id: tierId,
          price,
        });

        // Handle the response and store the token
        console.log(response);
      } catch (error) {
        // Handle registration error

        console.log(error);
      }
    }


    function getContact(){
        const data = client.get('/Contact/GetContact/1');
        console.log(data);
    }

    async function login(email="rimsaad@mail.com", password="123456789") {
      try {
        const response = await client.post('/Auth/Login',  {
          email:'rimsaad@mail.com',
          password:'123456789',
        }); 
         
        const tokenValue = response.accessToken;
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
        console.log(response, 'here goes');
        auth.setLogin(true);
       router.push({ name: 'home' }); 

      } catch (error) {
        console.log(error);
        // Handle login error
      }
    }

    function logoutFunc() {
      // Clear the token from local storage
      console.log('logout done');
      token.value = '';
       router.push({ name: 'home' }); 
      localStorage.removeItem('token');
    }

    return {
      token,
      register,
      login, 
      getContact,
      logoutFunc,
      auth
    };
  },
};
</script>
