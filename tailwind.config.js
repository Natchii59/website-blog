const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.outline-focus': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: `0 0 0 1px ${theme(
              'colors.orange.50'
            )}, 0 0 0 3px ${theme('colors.orange.400')}`,
            transitionProperty: 'box-shadow',
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
            transitionDuration: '.15s'
          }
        },
        '.dark': {
          '.outline-focus': {
            '&:focus-visible': {
              boxShadow: `0 0 0 1px ${theme(
                'colors.zinc.900'
              )}, 0 0 0 3px ${theme('colors.orange.400')}`
            }
          }
        }
      })
    })
  ]
}
