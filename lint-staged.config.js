module.exports = {
  '**/*.{js}': ['npm run lint:eslint', 'npm run lint:prettier'],
  '**/*.{scss,css}': ['npm run lint:stylelint', 'npm run lint:prettier'],
};
