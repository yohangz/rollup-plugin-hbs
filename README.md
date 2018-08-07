<a href="https://travis-ci.org/yohangz/rollup-plugin-hbs">
    <img src="https://travis-ci.org/yohangz/rollup-plugin-hbs.svg?branch=master" alt="travis build" height="18">
</a>
<a href="https://github.com/yohangz/rollup-plugin-hbs/blob/master/LICENSE">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="license" height="18">
</a>  
<a href="https://badge.fury.io/js/rollup-plugin-hbs">
    <img src="https://badge.fury.io/js/rollup-plugin-hbs.svg" alt="npm version" height="18">
</a>

# rollup-plugin-hbs

Minimal handlebars template bundle rollup plugin based on [rollup-plugin-handlebars-plus][rollup-plugin-handlebars-plus]

## Installation

Via [Yarn](https://yarnpkg.com/lang/en/)

```yarn add rollup-plugin-hbs --save-dev```

Via [NPM](https://www.npmjs.com/)

```npm install rollup-plugin-hbs --save-dev```

## Usage

### Rollup Configuration

```js
// rollup.config.js
import hbs from 'rollup-plugin-hbs';

export default {
  entry: 'entry.js',
  dest: 'bundle.js',
  plugins: [
    hbs({
      handlebars: {
          // The module ID of the Handlebars runtime, exporting `Handlebars` as `default`.
          // As a shortcut, you can pass this as the value of `handlebars` above.
          // See the "Handlebars" section below.
        id: 'handlebars', // Default: the path of Handlebars' CJS definition within this module
        
          // Options to pass to Handlebars' `parse` and `precompile` methods.
        options: {
            // Whether to generate sourcemaps for the templates
          sourceMap: true // Default: true
        },
        
        // Whether to remove newline and whitespace characters from compiled output.
        optimize: true
      },
        
      // In case you want to compile files with other extensions.
      templateExtension: '.html', // Default: '.hbs'
        
      // A function that can determine whether or not a template is a partial.
      isPartial: (name) => name.startsWith('_') // Default: as at left
    })
  ]
}
```

### Usage in code

```html
{{! src/client/js/views/_messageBody.html }}
<p>{{message}}</p>
```

```html
{{! src/client/js/views/message.html }}
<div>{{> _messageBody }}</div>
```

```js
// main.js
import '_messageBody.html';
import MessageTemplate from 'message.html';

$('body').append(MessageTemplate({ message: 'Hello world!' }));
```

## License

This software is licensed under the [MIT][license] License

[license]: https://github.com/yohangz/rollup-plugin-hbs/blob/master/LICENSE
[rollup-plugin-handlebars-plus]: https://github.com/mixmaxhq/rollup-plugin-handlebars-plus