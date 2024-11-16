import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// Base color set for theme generation
const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// Mapping of color shades for light and dark themes
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

// Function to generate theme objects by applying shade mapping
const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key; // Invert shades for dark theme
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

// Generate light and dark themes
const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

// Define themes for light and dark modes
const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"], // White in dark mode is very dark gray
    black: colors.gray["50"],  // Black in dark mode is very light gray
  },
};

// Tailwind CSS configuration
const config: Config = {
  darkMode: "class", // Use 'class' strategy to toggle dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend Tailwind's theme with additional utilities
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)], // Use the 'tw-colors' plugin to generate themes
};

export default config;
