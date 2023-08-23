/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light:{
          themeBackground: "#fff"
        },
        dark:{
          themeBackground: "#1F2029"
        }
      }
    },
  },
  plugins: [],
}
