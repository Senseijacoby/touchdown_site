/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      signature: ['Great Vibes'],
    },
    colors: {
      primary: colors.purple,
      secondary: colors.pink,
      c0: '#382a3f',
      c1: '#46344E',
      c2: '#e5e5e5',
      c3: '#d9d9d9',
      c4: '#cccccc',
      c5: '#bfbfbf',
      borderColor: '#1d1520',
      borderColor2: '#FFF',
      borderColor3: '#211a25',
      btnColor: '#8534a3',
      sendBtnColor: '#669966',
      text1: '#ADB7BE',

      btnColor2: '#5c6ac4',
      b0: '#b3b3b3',
      b1: '#b3b3b3',
      b2: '#b3b3b3',
      b3: '#b3b3b3',
      bgColor0: '#121212',
      form_bg: '#18191E',
      form_border: '#33353F',

      form_placeholder: '#9CA2A9',
    },
    backgroundImage: {
      'main-cover_light': 'url("/constellation.png")',
      'footer_cover': 'url("/bullseye-gradient.svg")',
      'pattern_dark': 'url("/dark-scales.svg")',
      'hero_shape2_light': 'url("/hero/shape_light.png")',
      'about_shape_dark': 'url("/about/shape_dark.svg")',
      'about_shape_light': 'url("/about/shape_light.png")',
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];