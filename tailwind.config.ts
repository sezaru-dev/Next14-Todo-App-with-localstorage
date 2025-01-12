import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',
        gradientBlue: 'hsl(192, 100%, 67%)',
        gradientPurple: 'hsl(280, 87%, 65%)',

        'lmode-veryLightGray': 'hsl(0, 0%, 98%)',
        'lmode-veryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'lmode-lightGrayishBlue': 'hsl(233, 11%, 84%)',
        'lmode-grayishBlue1': 'hsl(236, 9%, 61%)',
        'lmode-grayishBlue2': 'hsl(235, 19%, 35%)',

        'dmode-veryDarkBlue': 'hsl(235, 21%, 11%)',
        'dmode-darkDesaturatedBlue': 'hsl(235, 24%, 19%)',
        'dmode-lightGrayishBlue': 'hsl(234, 39%, 85%)',
        'dmode-lgbHover': 'hsl(236, 33%, 92%)',
        'dmode-grayishBlue1': 'hsl(234, 11%, 52%)',
        'dmode-grayishBlue2': 'hsl(233, 14%, 35%)',
        'dmode-grayishBlue3': 'hsl(237, 14%, 26%)',
      },
      fontFamily: {
        JosefinSans: ['Josefin Sans, sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
