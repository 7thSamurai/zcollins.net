/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#1C1C1C',
        'keppel': '#14B8A6',
        'ghost-white': '#FAFAFF',
        'roman-silver': '#84828F',
      },
      fontFamily: {
        inter: 'inter',
        redhat: 'redhat',
      },
    },
  },
  plugins: [],
}
