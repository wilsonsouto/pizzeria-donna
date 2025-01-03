// To change the pallete tone, access: https://palette.tone-row.com/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111111",
        accent: {
          green: "#228b22",
          red: "#cd212a"
        },
      },
    },
  },
  plugins: [],
};
