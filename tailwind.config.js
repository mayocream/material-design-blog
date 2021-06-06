module.exports = {
  // mode: 'jit',
  darkMode: 'media',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // specify other options here
  variants: {
    extend: {
      borderRadius: ['responsive', 'hover', 'group-hover'],
    },
  },
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '2.5rem': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '5.25rem': '5.25rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      width: {
        '18': '4.5rem',
      },
      height: {
        '18': '4.5rem',
      },
      margin: {
        '18': '4.5rem',
      },
      zIndex: {
        '5': 5,
      },
      boxShadow: {
        header: '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        fade: 'var(--color-fade)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        error: 'var(--color-error)',
      },
      lineHeight: {
        '12': '3rem',
        '3.25rem': '3.25rem',
        '18': '4.5rem',
        '5.75rem': '5.75rem',
      },
      transitionDuration: {
        '235': '235ms',
      },
      screens: {
        'md-max': { 'max': '767px' },
        'screen-920': { 'max': '920px' },
      },
      textColor: ['visited'],
      borderRadius: {
        '10': '2.5rem',
      },
      flex: {
        '1/2': '1 1 50%',
        'full': '1 1 100%',
      },
      margin: {
        '-3px': '-3px',
      },
    },
  },
}
