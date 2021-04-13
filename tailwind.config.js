const theme = require('./tailwind-theme/index')

module.exports = {
  purge: [
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/sass/*.sass',
  ],
  theme,
  variants: {},
  plugins: [],
}
