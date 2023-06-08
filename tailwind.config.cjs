/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cleaning : 'url("../src/assets/media/img/cleaning.png")',
        flexible : 'url("../src/assets/media/img/flexible.png")',
        happiness : 'url("../src/assets/media/img/happiness.png")',
        roomate : 'url("../src/assets/media/img/roomate.png")',
      
      },
      fontFamily: {
        'dmsan': "dmsan",
        'inter': "inter",
        'interb': "interb",
        'popins' : "popins"
        
      },
      colors: {
        primary : "#F4511E",
        secondary : "#18191F",
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },

  plugins: [],
}
