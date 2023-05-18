/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00709C',
        iconColor:'#737E83',
        primaryGreen:'#2E9E20',
        primaryGray:'#EFEFF0'
      },
      width:{
        w18 : '72px'
      }
    },
  },
  plugins: [],
}