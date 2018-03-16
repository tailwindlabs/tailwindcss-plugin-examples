const processPlugins = require('tailwindcss/lib/util/processPlugins').default
const defaultConfig = require('tailwindcss/defaultConfig')
const objectFit = require('../plugins/object-fit')
const postcss = require('postcss')


expect.extend({
  toMatchCss(received, argument) {
    function clean(css) {
        const root = postcss.parse(css)
        root.walk(node => {
            node.raws = {}
        })
        return root.toString().trim()
    }

    if (clean(received) === clean(argument)) {
      return {
        message: () => `expected ${received} not to match CSS ${argument}`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to match CSS ${argument}`,
        pass: false,
      }
    }
  },
})

function css(plugin, config = defaultConfig()) {
    const [ components, utilities ] = processPlugins(Object.assign(config, {
        plugins: [ plugin ],
    }))

    return {
        components: components.toString(),
        utilities: utilities.toString(),
    }
}

test('it produces the correct CSS', () => {
    const { utilities } = css(objectFit())

    expect(utilities).toMatchCss(`
        @variants {
          .object-contain {
            object-fit: contain;
          }
          .object-cover {
            object-fit: cover;
          }
          .object-fill {
            object-fit: fill;
          }
          .object-none {
            object-fit: none;
          }
          .object-scale {
            object-fit: scale-down;
          }
        }
    `)
})
