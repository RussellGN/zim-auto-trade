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
          light: "#4887AB",
          default: "#407899",
          dark: "#376783",
        },
        secondary: {
          light: "#F1F1CB",
          default: "#f0f0c9",
          dark: "#E2E293",
        },
        success: {
          light: "#549861",
          default: "#386641",
          dark: "#2D5335",
        },
        danger: {
          light: "#C68273",
          default: "#c17767",
          dark: "#B35C49",
        },
        info: {
          light: "#F3D16B",
          default: "#f2cd60",
          dark: "#EEBF30",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
