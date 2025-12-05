/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['ExcellentLLWeb-Bold'],
        headings: ['NeueHaasGroteskDisplay-75Bold'],
      },
      fontSize: {
        'main-size': '18px',
      },
      letterSpacing: {
        'main-tracking': '-0.01em',
      },
      colors: {
        'main-color': '#000000',
        'hover-color': 'rgba(0, 0, 0, 0.5)',
      },
      lineHeight: {
        main: '18px',
      },
    },
  },
  plugins: [],
};
