const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"poppins"', 'sans-seriff'],
        nexa: ['"nexa"', 'sans-seriff']
      },
      colors: {
        wandrdark: "#131313",
        extradark: "#111111",
        primary: '#df2935',
        secondary: '#246eb9',
        accent: '#ff8811',
        altgray: colors.coolGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
