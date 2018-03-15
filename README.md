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

In `plugins/simple-buttons/index.js` you'll find an example of a plugin that adds new button component classes.

![](https://user-images.githubusercontent.com/4323180/37477287-b367cf88-284d-11e8-823b-f793c3ba1119.png)

This plugin exposes quite a number of configuration options *(all optional)*, which can be passed to the plugin as an object:

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
        sm: {
          fontSize: '.875rem',
          padding: '.5rem .75rem',
        },
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

