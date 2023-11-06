/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors:{
        "lemon-green":"#23B123",
        "footer-grey":"#354046",
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
          "light-grey":"#C4C4C4"
            
          },
        },
        dark: {
          // ...
          colors: {
            "dark-green":"#263238",
            "dark-ash":"#263239",
            "dark-grey":"#4F4F4F"
          },
        },
        // ... custom themes
      },
    }),
  ],
};
