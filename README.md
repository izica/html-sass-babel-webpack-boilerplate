# Webpack boilerplate with SASS(SCSS), HTML modules, Babel
## Features
* Easy to start `yarn install` + `yarn start` (`npm install` + `npm start`)
* Don't worry about webpack config, just code
* Custom HTML Modules plugin
```html
        <!DOCTYPE html>
        <html>
        <head>
            <title>Example doc</title>
        </head>
        <body>
            <include>_header.html</include>
            <h1>Catalog products</h1>
            <include>_products-filter.html</include>
            <include>_products-list.html</include>
            <include>_footer.html</include>
        </body>
        </html>

```
* HTML hot reload(Livereload)
* SCSS (SASS)
* jQuery already installed
* Babel
  * ES6
  * ES7
  * Class syntax + Class properties
  * etc
* Autoprefixer
* Minifier
* PostCSS
* Eslint (airbnb-base config)
* Eslinting on the fly (while dev)
* Pretty console output (Friendly errors webpack plugin)

## Adding libraries to JS
1. Find the desired library at https://www.npmjs.com/ (example: https://www.npmjs.com/package/moment)
2. Install `yarn add moment` or `npm install moment`
3. Import library into your code `import moment from 'moment'`
4. Use it

## Usage
Installation
```
npm install
or
yarn
```
Start dev server for development
```
npm start
or 
yarn start-yarn
```
Build
```
npm run build
or
yarn build
```
