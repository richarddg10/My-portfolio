/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'primary-green': '#2ADE71',
        'primary-gray': '#0D0D0D',
        'secondary-gray': '#191919',
        'third-gray': '#383838',
        'fourth-gray': '#505050',
        'fifth-gray': '#989898'
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900
      }
    },
    backgroundImage: {
      'img-patron': 'url(./src/assets/portfolio-patron.svg)'
    },
    dropShadow: {
      'richi-img': '0 0 17.91px rgba(255, 255, 255, 0.23)'
    },
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}
