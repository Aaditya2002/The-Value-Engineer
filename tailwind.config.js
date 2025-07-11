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
        // Custom luxury pastel palette
        "warm-beige": {
          50: "#fdfcfb",
          100: "#faf8f5",
          200: "#f5f0e8",
          300: "#ede4d3",
          400: "#e1d0b7",
          500: "#d4b896",
          600: "#c4a373",
          700: "#a8875a",
          800: "#8a6f4a",
          900: "#6f5a3d",
        },
        "pale-sage": {
          50: "#f8faf8",
          100: "#f1f5f1",
          200: "#e3ebe3",
          300: "#cdd9cd",
          400: "#b0c4b0",
          500: "#8fa98f",
          600: "#6f8a6f",
          700: "#5a715a",
          800: "#4a5d4a",
          900: "#3d4d3d",
        },
        "muted-coral": {
          50: "#fef9f8",
          100: "#fdf2f0",
          200: "#fae5e1",
          300: "#f5d0c8",
          400: "#edb4a6",
          500: "#e39481",
          600: "#d4735e",
          700: "#c05a44",
          800: "#a04a39",
          900: "#834034",
        },
        "dusty-lavender": {
          50: "#faf9fb",
          100: "#f4f2f7",
          200: "#e9e5ef",
          300: "#d9d1e1",
          400: "#c4b5cf",
          500: "#ab95b8",
          600: "#8f759c",
          700: "#765f7f",
          800: "#625069",
          900: "#524357",
        },
        "mist-blue": {
          50: "#f8fafb",
          100: "#f1f5f7",
          200: "#e3ebef",
          300: "#cdd9e1",
          400: "#b0c2cf",
          500: "#8fa7b8",
          600: "#6f8a9c",
          700: "#5a717f",
          800: "#4a5d69",
          900: "#3d4d57",
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
