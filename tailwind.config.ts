import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#a3d9ff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      margin: {
        '25': '6.25rem', // Añade un margen personalizado de 11.25rem (180px)
      },
    },
  },
  plugins: [],
};

export default config;