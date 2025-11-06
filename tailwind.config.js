/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          primary:'#1299e8',
          secondary:'#002f67'
      }
    },
  },
  plugins: [require("daisyui")],
}

