/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    zIndex: {
      header: 100,
    },
    extend: {
      height: {
        section: '640px',
      },
    },
  },
  plugins: [],
};
