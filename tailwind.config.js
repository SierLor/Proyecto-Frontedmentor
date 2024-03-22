/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Young-Serif' : ['Young-Serif', 'serif'],
        'Outfit' : ['Outfit', 'sans-serif']
      },
      colors:{
        'letter' : [' hsl(30, 10%, 34%)'],
        'titles' : ['hsl(332, 51%, 32%)'],
        'fondo-claro' : ['hsl(330, 100%, 98%)'],
        'drak-Chocolate' : ['hsl(24, 5%, 18%)'],
        'Eggshell': ['hsl(30, 54%, 90%)'],
      }
    },
  },
  plugins: [],
}

