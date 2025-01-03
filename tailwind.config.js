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
      backgroundImage: {
         header: "url('/header.jpeg')",
         promotion: "url('/promotion.jpeg')",
      },
      backgroundColor: {
         shadow: "rgba(0, 0, 0, 0.8)"
      },
      fontFamily: {
        apercu: ["Apercu", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      height: {
        large: "800px",
        small: "500px"
      }
    },
  },
  plugins: [],
};
