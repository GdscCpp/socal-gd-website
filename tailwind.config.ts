import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "4cg-1":
          "linear-gradient(to right, #34a853 0%,#4284f5 30%,#4284f5 35%,#9e6cd5 55%,#eb4235 65%,#eb4235 75%,#f46930 80%,#fecb33 90%,#fecb33 100%);",
        "4cg-2":
          "linear-gradient(to right, #4284f5 0%,#4284f5 10%,#9e6cd5 25%,#eb4235 35%,#eb4235 35%,#eb4235 45%,#f46930 60%,#fecb33 70%,#fecb33 80%,#34a853 90%,#34a853 100%);",
        "2cg-1":
          "linear-gradient(to right, #1e5799 0%,#4284f5 25%,#9e6cd5 50%,#eb4235 75%,#eb4235 100%);",
        "2cg-2":
          "linear-gradient(to right, #fbbc04 0%,#fbbc04 25%,#f46930 50%,#eb4235 75%,#eb4235 100%);",
        "2cg-3":
          "linear-gradient(to right, #4284f5 0%,#4284f5 25%,#34a853 75%,#34a853 100%);",
        "2cg-4":
          "linear-gradient(to right, #fbbc04 0%,#fbbc04 25%,#34a853 75%,#34a853 100%);",
      },
      colors: {
        green: {
          500: "#34A853",
        },
        red: {
          500: "#EB4235",
        },
        blue: {
          500: "#4284F5",
        },
        yellow: {
          500: "#FBBC04",
        },
        danger: {
          400: "#6E1717",
          300: "#A92323",
          200: "#C92929",
          100: "#E16B6B",
          50: "#FBEAEA",
        },
        success: {
          400: "#0A4834",
          300: "#0E674B",
          200: "#12825F",
          100: "#1BC590",
          50: "#F6FEFB",
        },
        warning: {
          400: "#A6620D",
          300: "#EE9322",
          200: "#F2AB53",
          100: "#F9DBB5",
          50: "#FFFDFA",
        },
        dark: {
          400: "#1E1E1E",
          300: "#1C1C1C",
          200: "#1A1A1A",
          100: "#161616",
          50: "121212",
        },
      },
    },
  },
  plugins: [],
};
export default config;
