# Tailwind CSS Example Plugins

To get started, clone the project and install the dependencies:

```
# Using npm
npm install

# Using Yarn
yarn
```

After that, you can process the CSS by running:

```
# Using npm
npm run build

# Using Yarn
yarn run build
```

Load up `./index.html` in your browser and you're off to the races!

## Object-Fit Utilities

In `plugins/object-fit/index.js` you'll find an example of a plugin that adds a set of simple, non-configurable utility classes for the `object-fit` property.

The only option it exposes are the variants you'd like to generate (`responsive`, `hover`, `focus`, etc.), which you pass to the plugin as a simple array:

```js
plugins: {
    // ...
    require('./plugins/object-fit')(['responsive']),
}
```

This is just about the simplest type of plugin you could make.

## Simple Buttons

In `plugins/simple-buttons/index.js` you'll find an example of a plugin that adds new component classes.

![](https://user-images.githubusercontent.com/4323180/37471725-d90672a6-2840-11e8-8b15-924e62c90e1d.png)
