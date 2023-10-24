/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode : 'class',
  theme: {
    container :{
      center: true,
      padding : '10px',
    },
    extend: {
      colors : {
        biru : '#06b6d4',
        dark : '#0f172a'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

