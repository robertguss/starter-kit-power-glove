const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// TODO: Setup Rucksack PostCSS Plugin

mix.js('resources/js/site.js', 'public/js');

mix.sass('resources/scss/site.scss', 'public/css').options({
  postCss: [require('tailwindcss')],
});

if (mix.inProduction()) {
  mix.version();
  mix.purgeCss({
    enabled: true,
    whitelistPatternsChildren: [/^content$/],
  });
}
