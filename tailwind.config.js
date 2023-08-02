/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Mulish': ['Mulish', 'sans-serif'],
      },
      letterSpacing:{
        'md':'0.03125rem',
        'sm':'0.01875rem',
      },
      fontSize:{
        'ss': '0.625rem',
        '11xl': '10rem',
        '13xl': '12rem',

      },
      lineHeight:{
        'lg': '10.375rem',
        'md': '6.375rem',
      },
      spacing:{
        '18': '4.5rem',
      },
      colors:{
        'new_green': '#00d54b',
        'new_gray': '#b6b6b6',
      },
      gap:{
        '7.5': '1.875rem',
      }
    },
  },
  plugins: [],
}
