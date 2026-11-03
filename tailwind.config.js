/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050507',
          900: '#0B0B0E',
          850: '#111116',
          800: '#181820',
          700: '#23232E',
          600: '#323242',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FEF0BF',
          300: '#FDE494',
          400: '#F3CF55',
          500: '#D4AF37', // Classic metallic gold
          600: '#B8860B', // Dark goldenrod
          700: '#996515',
          800: '#734A0E',
          900: '#4D3008',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDE494 0%, #D4AF37 50%, #996515 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF37 0%, #FFF9E5 50%, #D4AF37 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, rgba(11, 11, 14, 0.95) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
