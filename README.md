# Webpack boilerplate with SASS, HTML modules, Babel
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
## Features
* Custom html modules plugin
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

* HTML hot reload
* HTML partials(you can include html partial)
* SASS
* Babel(es6/7)
* Autoprefixing and minifying with postcss
* Eslint(airbnb-base config)
* Eslinting on the fly(while dev)
* Pretty console output(Friendly errors webpack plugin)
