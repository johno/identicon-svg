var React = require('react')
var chroma = require('chroma-js')
var sample = require('lodash').sample
var randomHexColor = require('random-hex-color')

var Identicon = React.createClass({displayName: "Identicon",
  getDefaultProps: function() {
    return {
      size: 120
    }
  },

  render: function() {
    var size = this.props.size
    var fill = this.props.fill
    var viewBox = [0, 0, size, size].join(' ')
    var colorBoxSize = size / 6

    var baseColors = [randomHexColor(), randomHexColor()]
    var scale = chroma.scale(baseColors).domain([0, 100, 200, 300, 400])
    var colors = baseColors.concat([scale(100).hex(), scale(200).hex(), scale(300).hex()])

    var paths = []
    for(var i = 0; i <= this.props.size; i += colorBoxSize) {
      for(var j = 0; j <= this.props.size; j += colorBoxSize) {
        paths.push(React.createElement('path', { d: getBoxPath(i, j, colorBoxSize), fill: sample(colors), key: '' + i + j}))
      }
    }

    return (
      React.createElement('svg', {
          xmlns: 'http://www.w3.org/svg/2000',
          viewBox: viewBox,
          width: size,
          height: size,
        },
        paths
      )
    )
  }
})

module.exports = Identicon

function getBoxPath(x, y, z) {
  return [
    'M', x, y,
    'L', x, y + z,
    'L', x + z, y + z,
    'L', x + z, y,
    'L', x, y
  ].join(' ')
}
