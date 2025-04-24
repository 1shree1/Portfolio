/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Tell Tailwind to scan these files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
  module.exports = {
    darkMode: 'class', // important!
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  