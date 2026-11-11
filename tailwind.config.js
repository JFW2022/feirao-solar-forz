/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forz: {
          navy: "#041026",
          deep: "#071733",
          royal: "#003882",
          electric: "#0066FF",
          cyan: "#0099FF",
          gold: "#FFB800",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee-slow': 'marqueeY 34s linear infinite',
        'marquee-slow-reverse': 'marqueeYReverse 38s linear infinite',
        'marquee-x': 'marqueeX 32s linear infinite',
      },
      keyframes: {
        marqueeY: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, -50%, 0)' },
        },
        marqueeYReverse: {
          '0%': { transform: 'translate3d(0, -50%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        marqueeX: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
