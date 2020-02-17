const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./resources/**/*.html', './resources/**/*.vue'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
