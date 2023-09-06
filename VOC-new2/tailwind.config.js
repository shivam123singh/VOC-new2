const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '3lg': '1920px', // large desktops
        '2xl': '1440px', // standard desktops
        xl: '1280px', // small desktops
        // small mobile < 480px/640px mobile phones (sm --> 640px md -->	767px/768px) Tablets --> (portrait - lg < 1024px landscape < 1280px)
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        dashboard: 'hsl(var(--dashboard-background))',
        grey: {
          50: 'hsl(var(--grey-50))',
          90: 'hsl(var(--grey-90))',
          100: 'hsl(var(--grey-100))',
          200: 'hsl(var(--grey-200))',
          300: 'hsl(var(--grey-300))',
          500: 'hsl(var(--grey-500))',
          700: 'hsl(var(--grey-700))',
          DEFAULT: 'hsl(var(--grey))',
        },
        green: {
          50: 'hsl(var(--green-50))',
          100: 'hsl(var(--green-100))',
          DEFAULT: 'hsl(var(--green))',
        },
        blue: {
          DEFAULT: 'hsl(var(--blue))',
        },
        navyblue: {
          100: 'hsl(var(--navy-blue-100))',
          DEFAULT: 'hsl(var(--navy-blue))',
        },
        dark: {
          700: 'hsl(var(--dark-700))',
          800: 'hsl(var(--dark-800))',
          100: 'hsl(var(--dark-100))',
          DEFAULT: 'hsl(var(--dark))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          300: 'hsl(var(--secondary-300))',
          500: 'hsl(var(--secondary-500))',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        table: {
          DEFAULT: 'hsl(var(--table))',
          foreground: {
            DEFAULT: 'hsl(var(--table-foreground))',
            heading: 'hsl(var(--table-foreground-2))',
          },
        },
        radio: {
          DEFAULT: 'hsl(var(--radio))',
        },
        info: {
          500: 'hsl(var(--info-500))',
          foreground: 'hsl(var(--info-foreground))',
        },
        lightgrey: '#BFBFBF',
        textdark: '#2E2C34',
        grey100: '#666666',
        grey700: '#84818A',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 10s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
