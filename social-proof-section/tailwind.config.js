module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
      },
      fontSize: {
        '3.5xl': ['32px', {
          letterSpacing: '-1.14px',
          lineHeight: '32px',
        }],
        'xs-1': ['13px', {
          lineHeight: '14.56px',
        }],
      },
      spacing: {
        '4.5': '18px',
        '6.5': '26px',
        '7.5': '30px',
        '22.5': '90px'
      },
      letterSpacing: {
        'quote': '-0.23px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
