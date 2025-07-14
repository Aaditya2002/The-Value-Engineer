/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel Orange palette
        "pastel-orange": {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        "light-orange": {
          50: "#fffbf5",
          100: "#fff6e6",
          200: "#ffedcc",
          300: "#ffe0a3",
          400: "#ffd166",
          500: "#ffc233",
          600: "#ffb300",
          700: "#e69c00",
          800: "#cc8800",
          900: "#b37400",
        },
        "soft-orange": {
          50: "#fff9f0",
          100: "#fff2e0",
          200: "#ffe4c0",
          300: "#ffd4a0",
          400: "#ffc080",
          500: "#ffa666",
          600: "#ff8c4d",
          700: "#ff7333",
          800: "#ff5a1a",
          900: "#ff4000",
        },
        "warm-orange": {
          50: "#fff8f0",
          100: "#fff0e0",
          200: "#ffe0c0",
          300: "#ffd0a0",
          400: "#ffc080",
          500: "#ffb066",
          600: "#ffa04d",
          700: "#ff9033",
          800: "#ff801a",
          900: "#ff7000",
        },
        "cream-orange": {
          50: "#fffdfa",
          100: "#fffaf5",
          200: "#fff5eb",
          300: "#fff0e0",
          400: "#ffebd6",
          500: "#ffe6cc",
          600: "#ffe1c2",
          700: "#ffdcb8",
          800: "#ffd7ae",
          900: "#ffd2a4",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        counter: "counter 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        counter: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
