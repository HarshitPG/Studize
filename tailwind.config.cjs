/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      fontFamily: {
        "supply-ultraLight": ["Montserrat-ExtraLight", "sans-serif"],
        "supply-regular": ["Montserrat-Regular", "sans-serif"],
        "supply-light": ["Montserrat-Light", "sans-serif"],
        "supply-medium": ["Montserrat-Medium", "sans-serif"],
        "supply-bold": ["Montserrat-Bold", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
