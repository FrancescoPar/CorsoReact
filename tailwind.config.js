import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false, //per levare gli stili di default di tailwind
  }
}

