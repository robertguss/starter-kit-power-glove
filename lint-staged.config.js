module.exports = {
  'resources/js/**/*.{js}': ['npm run lint:eslint', 'npm run lint:prettier'],
  'resources/scss/**/*.{scss,css}': [
    'npm run lint:stylelint',
    'npm run lint:prettier',
  ],
};
