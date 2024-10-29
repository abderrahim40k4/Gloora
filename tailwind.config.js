/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'baseColor': "#F3A17C",
      'white': "#FFFFFF",
      'black': "#000000",
      'softGray': '#F8F7F7'
    },
    extend: {
      backgroundImage: theme => (
        {
          'hero-pattern': "url('/images/bg-big.png')",
          'footer-texture': "url('/images/bg-small.png')",
          'footer-bg': "url('/images/footer-bg.png')",
          'about-bg': "url('/images/imageHero.png')",
          'product-bg': "url('/images/products-hero.png')",
          'about-mid-bg': "url('/images/bg-aboutmid.png')"
        }
      ),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        'Neue': ["PP Neue Montreal", " sans-serif"],
        'Averia': ["Averia Serif Libre", "serif"],
      },
      colors: {}
    }
  },
  plugins: [require("tailwindcss-animate")],
}

