/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#27B78D',
        iconColor:'#53545C'
      },
      width:{
        w18 : '72px'
      }
    },
  },
  plugins: [],
}