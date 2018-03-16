# Tailwind CSS Example Plugins

To get started, clone the project and install the dependencies:

```sh
# Using npm
npm install

# Using Yarn
yarn
```

After that, you can process the CSS by running:

```sh
# Using npm
npm run build

# Using Yarn
yarn run build
```

Load up `./index.html` in your browser and you're off to the races!

## Object-Fit Utilities

[View demo](https://tailwindcss.github.io/plugin-examples/#object-fit) &middot; [View source](https://github.com/tailwindcss/plugin-examples/blob/master/plugins/object-fit/index.js)

In `plugins/object-fit/index.js` you'll find an example of a plugin that adds a set of simple, non-configurable utility classes for the `object-fit` property.

![](https://user-images.githubusercontent.com/4323180/37477273-a16ac9fc-284d-11e8-9ec6-da819f66871e.png)

The only option it exposes are the variants you'd like to generate (`responsive`, `hover`, `focus`, etc.), which you pass to the plugin as a simple array:

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('./plugins/object-fit')(['responsive']),
  ],
}
```

This is just about the simplest type of plugin you could make.

## Simple Buttons

[View demo](https://tailwindcss.github.io/plugin-examples/#simple-buttons) &middot; [View source](https://github.com/tailwindcss/plugin-examples/blob/master/plugins/simple-buttons/index.js)

In `plugins/simple-buttons/index.js` you'll find an example of a plugin that adds new button component classes.

![](https://user-images.githubusercontent.com/4323180/37477287-b367cf88-284d-11e8-823b-f793c3ba1119.png)

This plugin exposes quite a number of configuration options which can be passed to the plugin as an object:

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('./plugins/simple-buttons')({


      // Set some default styles for all buttons.
      borderRadius: '.25rem',   // Default: .25rem
      fontWeight: '600',        // Default: 600
      lineHeight: '1.25',       // Default: 1.25
      fontSize: '1rem',         // Default: 1rem
      padding: '.5rem 1rem',    // Default: .5rem 1rem


      // Specify the button colors you'd like to generate.
      // 
      // By default, buttons are generated for all of Tailwind's
      // default base colors.
      colors: {
        // Class name: `.btn-primary`
        primary: {
          background: colors['blue'],
          text: colors['white'],
        },
        // Class name: `.btn-secondary`
        secondary: {
          background: colors['grey'],
          text: colors['black'],
        },
      },


      // Specify additional button sizes you'd like to generate.
      // 
      // You can override any of the default styles from above
      // at any given button size.
      sizes: {
        // Class name: `.btn-sm`
        sm: {
          fontSize: '.875rem',
          padding: '.5rem .75rem',
        },
        // Class name: `.btn-lg`
        lg: {
          fontSize: '1.25rem',
          padding: '.75rem 1.5rem',
          borderRadius: '.5rem',
        }
      }

    }),
  ],
}
```

Configuration is entirely optional; the plugin will use sane defaults based on Tailwind's default configuration if you don't provide any of your own overrides.

If you want to extend the plugin's default configuration instead of overriding it entirely, you can pass a function which accepts the default configuration, modifies it, and returns a new configuration object:

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('./plugins/simple-buttons')(function (options) {
      options.sizes = Object.assign(options.sizes, {
        xl: {
          fontSize: '1.5rem',
          padding: '1rem 2rem',
          borderRadius: '.75rem',
        }
      })

      return options  
    }),
  ],
}
```

Again, the sky is the limit in terms of the API a plugin exposes for configuration. You can do anything you want!

## CSS Grid Utilities

[View demo](https://tailwindcss.github.io/plugin-examples/#css-grid) &middot; [View source](https://github.com/tailwindcss/plugin-examples/blob/master/plugins/css-grid/index.js)

In `plugins/css-grid/index.js` you'll find an example of a plugin that adds new utilities for using [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

![](https://user-images.githubusercontent.com/4323180/37525015-fb5c78f2-2901-11e8-97be-18c66d12bf84.png)

It exposes three configuration options:

- `grids`, for specifying all of the grid sizes you'd like to generate
- `gaps`, for specifying the gap sizes you'd like to generate
- `variants`, for specifying which variants to generate

```js
module.exports = {
  // ...

  plugins: [
    // ...
    require('./plugins/css-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
      },
      variants: ['responsive'],
    }),
  ],
}
```

With zero configuration, it will generate grids from 1 to 12 columns in size, no gap sizes, and `responsive` variants for each new utility.

The plugin generates the following sets of classes:

- `.grid`, for setting `display: grid` on an element
- `.grid-columns-{size}`, for specifying the number of columns in the grid
- `.grid-gap-{size}`, for specifying the size of the gap between columns/rows
- `.col-span-{columns}`, for specifying how wide a column should be
- `.col-start-{line}` and `.col-end-{line}`, for specifying a column's start and end points explicitly (useful for reordering columns or leaving gaps)

It's not really practical to expose all of the power of CSS Grid through utilities, but this plugin is a good example of using CSS Grid to replace a column-only float or Flexbox grid.
