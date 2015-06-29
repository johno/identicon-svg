var React = require('react')
var chroma = require('chroma-js')
var sample = require('lodash').sample
var randomHexColor = require('random-hex-color')

var Identicon = React.createClass({
  displayName: 'Identicon',
  getDefaultProps: function() {
    return {
      size: 120,
      colors: [],
      symmetrical: true
    }
  },

  render: function() {
    var size = this.props.size
    var fill = this.props.fill
    var viewBox = [0, 0, size, size].join(' ')
    var colorBoxSize = size / 6

    var randomColor = this.props.colors.length ? sample(colors) : randomHexColor()
    var baseColors = [randomColor, getComplementaryColor(randomColor)]
    var scale = chroma.scale(baseColors).domain([0, 100, 200, 300, 400])
    var identiconColors = baseColors.concat([scale(100).hex(), scale(200).hex(), scale(300).hex(), scale(400).hex()])

    var paths = []
    for(var i = 0; i <= this.props.size / 2; i += colorBoxSize) {
      for(var j = 0; j <= this.props.size; j += colorBoxSize) {
        var color = sample(identiconColors)
        var mirrorColor = this.props.symmetrical ? color : sample(identiconColors)
        paths.push(React.createElement('path', { d: getBoxPath(i, j, colorBoxSize), fill: color, key: '' + i + j }))
        paths.push(React.createElement('path', { d: getBoxPath(this.props.size - i - colorBoxSize, j, colorBoxSize), fill: color, key: '' + i + j + 2 }))
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

function getComplementaryColor(color) {
  var colorAsHex = color.replace('#', '0x') ^ '0xfffff'
  var complement =  ('000000' + colorAsHex.toString(16)).slice(-6)
  return '#' + complement
}
