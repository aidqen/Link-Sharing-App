/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'], // Use the custom font as the sans-serif
      },
      colors: {
        purple: {
          light: '#EEEAFD',
          bright: '#663FFD',
          dark: '#00000026',
          dark2: '#00000033',
          veryDark: '#00000080',
        },
        gray: {
          medium: '#737373',
        },
      },
    },
  },
  plugins: [],
}
