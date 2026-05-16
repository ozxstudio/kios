/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Nalar dekonstruksi visual ala Sains Teknologi Purbawi
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)', textShadow: '2px 0 red' },
          '40%': { transform: 'translate(-2px, -2px)', textShadow: '-2px 0 cyan' },
          '60%': { transform: 'translate(2px, 2px)', textShadow: '1px 0 yellow' },
          '80%': { transform: 'translate(2px, -2px)', textShadow: '-1px 0 magenta' },
        },
        // Efek menderu pelan ala mesin Dong-Feng
        vibrate: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        }
      },
      animation: {
        'glitch-fast': 'glitch 0.2s infinite',
        'glitch-slow': 'glitch 2s infinite',
        'mesin-menderu': 'vibrate 0.1s infinite',
      },
    },
  },
  plugins: [],
}