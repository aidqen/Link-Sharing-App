/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'], // Use the custom font as the sans-serif
      },
      width: {
        calcCustom: 'calc(100% - (1.75rem * 2))',
        headerPreview: 'calc(100vw - 5em)'
      },
      height: {
        calcCustom: 'calc(100vh - (1.75rem * 2))',
        mainHeight: 'calc(100% - (5rem + (1.75rem * 2)))',
        
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
        background: {
          white: 'white',
          mainBg: 'rgb(248,248,248)'
        }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [false]
  },
}
