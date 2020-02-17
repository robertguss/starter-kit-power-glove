# Work in Progress

> This project is not ready for use, but will be soon...

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/NES-Power-Glove.jpg" width="100%" alt="Nintendo Power Glove" /></p>
<h1 align="center">
  Statamic Starter Kit: Power Glove
</h1>

![Statamic 3.0+](https://img.shields.io/badge/Statamic-3.0+-FF269E?style=for-the-badge&link=https://statamic.com)

## Features

- Parcel JS
- PostCSS
- Tailwind CSS
- PurgeCSS
- SCSS
- ESLint
- Prettier
- Stylelint
- Linting on git pre-commit with Husky & Lint-Staged
- Editor config - for consistent formatting & conventions
- Jest for unit tests
- Cypress for E2E tests

## Quick Start

**1. Create a new site** cloning the repo and removing the origin repo.

```
git clone git@github.com:robertguss/starter-kit-power-glove.git new-site
cd my-site
rm -rf .git
composer install
cp .env.example .env && php artisan key:generate
```

**2. Make a new user** – you'll want it to be a `super` so you have access to everything.

```
php please make:user
```

**3. Do your thing!**

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://new-site.test`. You can access the control panel at `http://new-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic 3 docs](https://statamic.dev), and enjoy!
