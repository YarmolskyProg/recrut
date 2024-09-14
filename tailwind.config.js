/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  // darkMode: 'class',
  theme:{
    extend: {
      fontFamily: {
        'roboto': ['Roboto Flex', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'condensed': ['Roboto Condensed', 'sans-serif']
      }
    }
  },
  // theme: {
  //   screens: {
  //     '2xl': { 'max': '1535px' },
  //     // => @media (max-width: 1535px) { ... }

  //     'xl': { 'max': '1279px' },
  //     // => @media (max-width: 1279px) { ... }

  //     'lg': { 'max': '1023px' },
  //     // => @media (max-width: 1023px) { ... }

  //     'md': { 'max': '767px' },
  //     // => @media (max-width: 767px) { ... }

  //     'sm': { 'max': '639px' },
  //     // => @media (max-width: 639px) { ... }
  //   },
  //   extend: {},
  // },
  plugins: [],
}

