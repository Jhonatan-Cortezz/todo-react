/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans']
      },
      colors: {
        /* Primary */
        'bright-blue': 'hsl(220, 98%, 61%)',        

        /* Light Theme */
        'very-light-gray': 'hsl(0, 0%, 97%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

        /* dark theme */
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'd-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hov': 'hsl(236, 33%, 92%)',
        'd-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-1': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-2': 'hsl(237, 14%, 26%)'
      },
      backgroundImage: {
        'check-background': 'hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
      }
    },
  },
  plugins: [],
}

