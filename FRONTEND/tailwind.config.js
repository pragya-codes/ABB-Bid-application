/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sans: ['Inter', 'sans-serif'],
      colors: {
        customHeader: "#FFE5F1",
        backgroundImage: theme => ({
          'custom-gradient': 'linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)',
        }),
        customGreen: '#17BF63', // Example custom color
      },
    },
  },
  plugins: [],
}