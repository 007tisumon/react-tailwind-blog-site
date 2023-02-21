/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        gray1: '#252b33',
        dark: '#111418'
      }
    },
    
  },
  plugins: [],
}
