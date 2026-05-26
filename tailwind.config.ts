import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "rgb(var(--color-coral) / <alpha-value>)",
        "coral-dark": "rgb(var(--color-coral-dark) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        "dark-2": "rgb(var(--color-dark-2) / <alpha-value>)",
        "dark-3": "rgb(var(--color-dark-3) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
