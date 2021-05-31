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
      height: {
        '18': '4.5rem',
      }
    }
  }
};
