module.exports = {
  'resources/**/*.{js}': ['npm run lint:eslint', 'npm run lint:prettier'],
  'resources/**/*.{scss,css}': [
    'npm run lint:stylelint',
    'npm run lint:prettier',
  ],
};
