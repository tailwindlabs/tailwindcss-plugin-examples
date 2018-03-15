const _ = require('lodash')
const defaultConfig = require('tailwindcss/defaultConfig')()

module.exports = function ({ columns = _.range(1, 12), variants = ['responsive'] }) {
  return function ({ addUtilities }) {
    addUtilities([
      { '.grid': { display: 'grid' } },
      { '.grid-dense': { gridAutoFlow: 'dense' } },
      ...columns.map(n => ({
        [`.grid-columns-${n}`]: {
          gridTemplateColumns: `repeat(${n}, 1fr)`,
        }
      })),
      ..._.range(1, _.max(columns) + 1).map(n => ({
        [`.col-span-${n}`]: {
          gridColumnStart: `span ${n}`,
        }
      })),
      ..._.range(1, _.max(columns) + 2).map(n => ({
        [`.col-start-${n}`]: {
          gridColumnStart: `${n}`,
        },
        [`.col-end-${n}`]: {
          gridColumnEnd: `${n}`,
        },
      })),
    ], variants)
  }
}
