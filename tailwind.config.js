/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      boxShadow: {
        'bright': '-5px -5px 10px #FFFFFF, 3px 3px 10px #6D6D6D',
        'bright-50': '-3px -3px 5px #FFFFFF, 3px 3px 5px #6D6D6D',
        'inset': 'inset -5px -5px 8px #FFFFFF, inset 1px 1px 5px #6D6D6D',
        'inset-50': 'inset -3px -3px 8px #FFFFFF, inset 1px 1px 5px #6D6D6D',
        'gradient': '0 0 5px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.1), 0 0 15px rgba(255, 243, 164,0.4), 0 0 25px rgba(255, 197, 118 ,0.4), 0 0 35px rgba(255, 234, 19 ,0.4)'
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, rgba(255,158,0,1) 0%, rgba(255,187,39,1) 35%, rgba(254,255,0,1) 100%)'
      },
      fontSize: {
        'xxs':['0.7rem', '1rem'],
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'quick-sand': ['Quicksand', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1124px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}