import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      header: ["Lobster", "cursive"],
      paragraph: ["Apercu", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      green: "#2ba600",
      red: "#ff0000",
    },
  },
  plugins: [],
};
export default config;
