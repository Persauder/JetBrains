/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        wave1: {
          '0%, 100%': {
            'background-position': '0% 50%, 100% 25%',
          },
          '50%': {
            'background-position': '100% 50%, 0% 75%',
          },
        },
      },
      animation: {
        wave1: 'wave1 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
