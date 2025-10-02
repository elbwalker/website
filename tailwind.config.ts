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
        background: "var(--background)",
        foreground: "var(--foreground)",
        elbwalker: {
          DEFAULT: "#01b5e2",
          50: "#ffffff",
          100: "#edfeff",
          200: "#abf8ff",
          300: "#69ecfe",
          400: "#27dbfe",
          500: "#01b5e2",
          600: "#019bc3",
          700: "#015372",
          800: "#00283a",
          900: "#000203",
        },
      },
    },
  },
  plugins: [],
};
export default config;
