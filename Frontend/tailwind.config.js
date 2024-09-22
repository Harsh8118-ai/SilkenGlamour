/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        beige: {
          50: '#F5F5DC',
          100: '#ECEAD3',
        },
        gold: {
          500: '#D4AF37',
          600: '#C09630',
        },
    },
  
  },
  plugins: [],
}}