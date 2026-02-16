/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070d1a',
          900: '#0b1220',
          800: '#111c2e'
        },
        accent: {
          200: '#bfdbfe',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0, 0, 0, 0.25)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
