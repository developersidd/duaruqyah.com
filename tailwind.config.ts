import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "330px",
      md: "632px",
      lg: "1059px",
      xl: "1120px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        primary: {
          green: "rgb(var(--color-green))",
          black: "rgb(var(--color-black))",
          gray: "rgb(var(--color-gray))",
          "light-gray": "var(--color-light-gray)",
          lime: "rgb(var(--color-lime))",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
