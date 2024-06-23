/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "m-pink" : "hsl(322, 100%, 66%)",
        "m-l-pink" : "hsl(321, 100%, 78%)",
        "m-l-red" : "hsl(0, 100%, 63%)",
        "m-dark-cyan" :"hsl(192, 100%, 9%)",
        "m-pale-blue" :  "hsl(207, 100%, 98%)" 
      },
      fontFamily : {
        "m-sans" : "'Open Sans', 'sans-serif'",
        "m-poppins" : "'Poppins', 'sans-serif'",
      }
    },
  },
  plugins: [],
}