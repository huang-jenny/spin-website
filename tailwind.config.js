/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['ExcellentLLWeb-Bold'],
        headings: ['NeueHaasGroteskDisplay-75Bold'],
      },
    },
  },
  plugins: [],
};
