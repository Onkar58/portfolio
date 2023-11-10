/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js}"],
  darkMode: 'class',
  theme: {
    colors: {
      'background': "#f2f2f2",
      'background-light': "#eee",
      'text-color': "#000",
      'dark-background': "#131313",
      'dark-background-light': "#1e1e1e",
      'dark-text-color': "#f1f1f1",
      'accent': "#38B57D",
    },
    fontFamily:{
      'awesome-posem': ['AwesomePosem', 'Iceberg','sans-serif'], 
    },
    extend: {},
  },
  plugins: [],
}

