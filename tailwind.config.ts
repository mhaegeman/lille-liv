import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FBF8F3',
          100: '#F5F0E8',
          200: '#EBE3D3',
          300: '#DCCFB6',
        },
        sage: {
          DEFAULT: '#4A7C6F',
          50: '#EAF1EE',
          100: '#CDDED7',
          200: '#9EBEB1',
          300: '#6F9D8C',
          400: '#4A7C6F',
          500: '#3D6759',
          600: '#2F5045',
          700: '#223A32',
        },
        rust: {
          DEFAULT: '#C4623A',
          50: '#FAEDE5',
          100: '#F2D2BF',
          200: '#E5A581',
          300: '#D88660',
          400: '#C4623A',
          500: '#A64F2C',
          600: '#823D22',
        },
        ink: {
          DEFAULT: '#2A2520',
          muted: '#6B6258',
          subtle: '#9A9087',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42, 37, 32, 0.04), 0 4px 16px rgba(42, 37, 32, 0.04)',
        lift: '0 4px 24px rgba(42, 37, 32, 0.08)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

export default config;
