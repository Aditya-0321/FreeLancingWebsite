/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Define custom font sizes if needed
        '5xl': '3rem',
        '6xl': '4rem',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.25)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Add the text shadow plugin
  ],
}
