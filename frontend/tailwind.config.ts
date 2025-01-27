import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#77d4ac",
          default: "#0d6949",
          dark: "#073d24",
        },
        success: {
          light: "#ecfccb",
          default: "#84cc16",
          dark: "#4d7c0f",
        },
        secondary: {
          light: "#ffe4e6",
          default: "#f43f5e",
          dark: "#be123c",
        },
        info: {
          light: "#dbeafe",
          default: "#3b82f6",
          dark: "#1d4ed8",
        },
        danger: {
          light: "#fd9983",
          default: "#e42727",
          dark: "#a51414",
        },
        warning: {
          light: "#fdcc6f",
          default: "#e65e09",
          dark: "#a92f04",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
