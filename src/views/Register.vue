<template>
  <div
    class="flex min-h-full flex-1 flex-col h-screen justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center flex-col">
     <webLogo />
       
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
      <h1 class="leading-loose text-xl py-4 font-semibold text-gray-800">Start Your Free Trial</h1>
       <div class="mt-2 grid grid-cols-1 gap-4">
             

            <a
              href="#"
              class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-gray-900 focus-visible:outline border  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"/></svg>
              <span class="text-sm font-medium tracking-wider leading-6">SIGN UP WITH GOOGLE</span>
            </a>
          </div>


       <div class="relative mt-10">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div
              class="relative flex justify-center text-sm font-medium leading-6"
            >
              <span class="bg-white px-6 text-gray-900">OR </span>
            </div>
          </div>
        <form class="space-y-3" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="flex items-center justify-center py-3">
            

            <div class="text-xs  leading-6">
            By signing up, you agree to the 
              <a
                href="#"
                class="font-light text-primary hover:text-darkPrimary"
                >Terms of Service</a
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-darkPrimary px-3 py-2 text-sm font-normal leading-6 text-white tracking-wider shadow-sm hover:bg-darkPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              SIGN IN
            </button>
          </div>

          <div class="flex items-center justify-end">
            

            <div class="text-sm leading-6">
             Already a member? <router-link 
                to="/login"
                class="font-normal text-primary hover:text-darkPrimary"
                >Sign in</router-link
              >
            </div>
          </div>
        </form>

        <div>
         

         
        </div>
      </div>

      
    </div>
  </div>
</template>


<script setup>
  import webLogo from '@/components/svgs/webLogo.vue'
</script>