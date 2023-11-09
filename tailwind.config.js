/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
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
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)'
      },
      backgroundImage: {
        'check-background': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
      }
    },
  },
  plugins: [],
}

