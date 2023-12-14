const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'notoSansJP': ['"Noto Sans JP", sans-serif'],
        'novaSq': ['"Nova Square", sans-serif'],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
