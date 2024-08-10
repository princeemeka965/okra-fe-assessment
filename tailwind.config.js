/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        surfaceSecondary: '#F2F2F3',
        surfaceSubdued: '#909092',
        surfaceWhite: '#FEFEFF',
        borderPrimary: '#824FE7',
        borderError: '#FF401E'
      }
    },
  },
  plugins: [],
}