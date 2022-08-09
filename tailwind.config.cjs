/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "header-red": "#F55A5A",
        "maps": "#918E9B",
        "location": "#2B283A",
        "pin": "#F55A5A",
        "earth": "#DADADA"
      },
      fontSize: {
        "2xs": "0.64rem"
      },
      fontFamily: {
        "inter": ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
