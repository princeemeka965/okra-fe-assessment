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
        borderError: '#FF401E',
        primaryCTA: '#FEFEFF',
        romanSilver: '#E6E6E7',
        purpleLight: 'rgba(210, 188, 255, 1)',
        purpleSkin: 'rgba(186, 154, 255, 1)',
        orangeLight: 'rgba(255, 182, 147, 1)',
        orangeSkin: 'rgba(255, 140, 81, 1)',
        greyFade: 'rgba(254, 254, 255, 1)',
        greyDark: 'rgba(230, 230, 231, 1)',
        darkPrimary: '#202022',
        semanticsInfo: '#EAF3FF',
        textInfo: '#1A6AED',
        textLabel: '#464649'
      }
    },
  },
  plugins: [],
}