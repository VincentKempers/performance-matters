# Performance matters

## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/). It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages).

Differences from actual Bootstrap documentation:

- Added custom webfont
- Removed third party scripts
- The src directory is served with [Express](https://expressjs.com/).
- Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/)

## Getting started

- Install dependencies: `npm install`
- Serve: `npm start`
- Expose localhost: `npm run expose`

## Audit

- [Here you can find my audit ](https://github.com/VincentKempers/performance-matters/blob/master/AUDIT.MD)

## For critical css
gulp critical has already run on the master build.
But! if for some crazy reason you still need to run it!?
 - run gulp script with `gulp critical`
 - after that go to `_base/layout.html` and copy `<body {% block body_attributes %}{% endblock %}>`
 - if you aren't sure you can copy the `layout1.html` it's `<body {% block body_attributes %}{% endblock %}>` tag.
