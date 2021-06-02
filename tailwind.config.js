module.exports = {
  // mode: 'jit',
  darkMode: 'media',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // specify other options here
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      width: {
        '18': '4.5rem',
      },
      height: {
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
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        error: 'var(--color-error)',
      },
      lineHeight: {
        '18': '4.5rem',
      },
      transitionDuration: {
        '235': '235ms',
      }
    }
  }
};
