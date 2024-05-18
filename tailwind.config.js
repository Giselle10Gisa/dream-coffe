/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'xs': '365px',
      },
      colors: {
        neutral: '#F8B195',
        neutralPink: '#F67280',
        darkPink: '#C06C84',
        neutralPurple: '#6C5B7B',
        neutralBlue: '#355C7D',
      },
    },
    plugins: [],
  }
}
