/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'baseColor':"#F3A17C",
      'white':"#FFFFFF",
      'black':"#000000"
    },
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        'Neue': ["PP Neue Montreal"," sans-serif"],
        'Averia': ["Averia Serif Libre", "serif"],
      },
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

