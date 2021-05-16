const defaultTheme = require('tailwindcss/defaultTheme')

const menuHeight = '92px'
const containerHeight = `calc(100vh - ${menuHeight})`

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.tsx',
    './pages/*.tsx',
    './stories/**/*',
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      serif: ['Lora', 'ui-serif', 'Georgia'],
    },
    screens: {
      xs: { min: '375px', max: '639.9999px' },
      ...defaultTheme.screens,
    },
    boxShadow: {
      DEFAULT: '0 4px 4px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      colors: {
        flank: {
          purple: {
            light: '#B77BF8',
            DEFAULT: '#7304FF',
          },
          black: {
            light: '#979190',
            DEFAULT: '#000000',
          },
          green: {
            DEFAULT: '#2AFD2E',
          },
          gray: {
            light: '#C4C4C4',
            DEFAULT: '#59675A',
          },
          yellow: {
            DEFAULT: '#FBFF4A',
          },
          pink: {
            DEFAULT: '#FE0065',
          },
          red: {
            DEFAULT: '#EE3D54',
          },
        },
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.0625rem',
        '5xl': '2.5rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      width: {
        mobile: '23.438rem',
      },
      maxWidth: {
        '300px': '300px',
      },
      height: {
        mobile: '667px',
        navScreen: containerHeight,
      },
      minHeight: {
        navScreen: containerHeight,
      },
      padding: {
        nav: '35px 25px 25px',
      },
      borderWidth: {
        flank: {
          DEFAULT: '0.5px',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      strokeWidth: {
        20: '20',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
  variants: {},
}
