import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)"],
        mono: ["var(--font-geist-mono)"],
        arabic: ["Cairo", "Tajawal", "sans-serif"], // Added Arabic fonts
      },
      screens: {
        "toast-mobile": "600px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
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
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Custom Dr.X Colors
        "surface-base": "hsl(var(--surface-base))",
        "surface-l1": "hsl(var(--surface-l1))",
        "surface-l2": "hsl(var(--surface-l2))",
        "surface-l3": "hsl(var(--surface-l3))",
        "fg-primary": "hsl(var(--fg-primary))",
        "fg-secondary": "hsl(var(--fg-secondary))",
        "fg-tertiary": "hsl(var(--fg-tertiary))",
        "button-primary": "hsl(var(--button-primary))",
        "button-primary-hover": "hsl(var(--button-primary-hover))",
        "button-secondary": "hsl(var(--button-secondary))",
        "button-secondary-hover": "hsl(var(--button-secondary-hover))",
        "drx-blue": "hsl(var(--drx-blue))",
        "drx-purple": "hsl(var(--drx-purple))",
        "drx-green": "hsl(var(--drx-green))",
        "drx-red": "hsl(var(--drx-red))",
      },
      animation: {
        "text-pulse": "text-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "text-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
export default config
