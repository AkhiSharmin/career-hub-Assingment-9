/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#71ce52",

          "secondary": "#b54d36",

          "accent": "#f7b7de",

          "neutral": "#291D2F",

          "base-100": "#E2E6EE",

          "info": "#6A80D7",

          "success": "#1AE091",

          "warning": "#EAA810",

          "error": "#F7506C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

