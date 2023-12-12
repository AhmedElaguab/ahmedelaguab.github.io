/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '.5rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '728px',
          xl: '728px',
          '2xl': '728px',
        },
      },
    },
  },
  plugins: [],
}
