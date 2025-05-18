/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fd',
          100: '#e2e9fa',
          200: '#cbd7f7',
          300: '#a8bcf0',
          400: '#839be7',
          500: '#6879dc',
          600: '#505bd0',
          700: '#1a1a1a',
          800: '#121212',
          900: '#0a0a0a',
          950: '#050505',
        },
        neonBlue: {
          50: '#f0f7ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a5b8ff',
          400: '#8c7dff', // Bluish-purple
          500: '#7551ff', // More purple
          600: '#5e35ff', // Deep neon purple
          700: '#4722bd',
          800: '#371c94',
          900: '#2e1876',
          950: '#1c0c4e',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'matrix-text': 'matrix 20s linear infinite',
        'glitch': 'glitch 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        matrix: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(117, 81, 255, 0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(117, 81, 255, 0.13) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};