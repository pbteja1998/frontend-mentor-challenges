module.exports = {
  purge: [
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      spacing: {
        '9.5': '2.375rem',
        15: '3.75rem',
        26: '6.5rem',
        118: '29.5rem',
        128: '32rem',
        160: '40rem'
      },
      fontSize: {
        'summary': ['13px', {
          lineHeight: '13px',
        }],
        '3.5xl': ['2rem', {
          letterSpacing: '-0.02em',
          lineHeight: '2rem',
        }],
      },
      
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      cursor: ['hover']
    },
  },
  plugins: [],
}
