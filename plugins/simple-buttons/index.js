const _ = require('lodash')
const Color = require('color')
const defaultConfig = require('tailwindcss/defaultConfig')()

function defaultOptions() {
  return {
    borderRadius: '.25rem',
    fontWeight: '600',
    lineHeight: '1.25',
    fontSize: '1rem',
    padding: '.5rem 1rem',
    colors: {
      white: {
        background: defaultConfig.colors['white'],
        text: defaultConfig.colors['black'],
      },
      black: {
        background: defaultConfig.colors['black'],
        text: defaultConfig.colors['white'],
      },
      grey: {
        background: defaultConfig.colors['grey'],
        text: defaultConfig.colors['black'],
      },
      red: {
        background: defaultConfig.colors['red'],
        text: defaultConfig.colors['white'],
      },
      orange: {
        background: defaultConfig.colors['orange'],
        text: defaultConfig.colors['white'],
      },
      yellow: {
        background: defaultConfig.colors['yellow'],
        text: defaultConfig.colors['yellow-darkest'],
      },
      green: {
        background: defaultConfig.colors['green'],
        text: defaultConfig.colors['white'],
      },
      teal: {
        background: defaultConfig.colors['teal'],
        text: defaultConfig.colors['white'],
      },
      blue: {
        background: defaultConfig.colors['blue'],
        text: defaultConfig.colors['white'],
      },
      indigo: {
        background: defaultConfig.colors['indigo'],
        text: defaultConfig.colors['white'],
      },
      purple: {
        background: defaultConfig.colors['purple'],
        text: defaultConfig.colors['white'],
      },
      pink: {
        background: defaultConfig.colors['pink'],
        text: defaultConfig.colors['white'],
      },
    },
    sizes: {
      sm: {
        fontSize: '.875rem',
        padding: '.5rem .75rem',
      },
      lg: {
        fontSize: '1.25rem',
        padding: '.75rem 1.5rem',
      }
    }
  }
}

module.exports = function (options) {
  options = _.isFunction(options)
   ? options(defaultOptions())
   : _.defaults(options, defaultOptions())

  return function ({ addComponents, e }) {
    addComponents([
      {
        '.btn': {
          display: 'inline-block',
          padding: options.padding,
          fontSize: options.fontSize,
          fontWeight: options.fontWeight,
          lineHeight: options.lineHeight,
          borderRadius: options.borderRadius,
          textDecoration: 'none',
        }
      },
      ..._.map(_.omit(options.sizes, 'default'), (sizeOptions, name) => {
        return {
          [`.btn-${e(name)}`]: {
            padding: _.get(sizeOptions, 'padding', options.padding),
            fontSize: _.get(sizeOptions, 'fontSize', options.fontSize),
            fontWeight: _.get(sizeOptions, 'fontWeight', options.fontWeight),
            lineHeight: _.get(sizeOptions, 'lineHeight', options.lineHeight),
            borderRadius: _.get(sizeOptions, 'borderRadius', options.borderRadius),
          },
        }
      }),
      ..._.map(options.colors, (colorOptions, name) => {
        return {
          [`.btn-${e(name)}`]: {
            backgroundColor: colorOptions.background,
            color: colorOptions.text,
            '&:focus': {
              outline: 0,
              boxShadow: `0 0 0 .2em ${Color(colorOptions.background).alpha(.5).rgb().toString()}`,
            },
            '&:hover': {
              backgroundColor: _.get(colorOptions, 'hoverBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
              color: _.get(colorOptions, 'hoverText', colorOptions.text),
            },
            '&:active': {
              backgroundColor: _.get(colorOptions, 'activeBackground', Color(colorOptions.background).darken(0.1).hex().toString()),
              color: _.get(colorOptions, 'activeText', colorOptions.text),
            }
          }
        }
      })
    ])
  }
}
