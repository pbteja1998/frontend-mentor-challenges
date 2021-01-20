module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '81.5': '20.375rem',
        '93.5': '23.375rem',
      },
      colors: {
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'very-dark-desaturted-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
        'light-gray': 'background: #E8E9EC'
      },
      ringWidth: {
        5: '5px'
      },
      fontSize: {
        'xxs': ['0.625rem', {
          letterSpacing: '1.5px',
          lineHeight: '10px',
        }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
