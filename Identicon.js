var React = require('react')

var Identicon = React.createClass({displayName: "Identicon",
  getDefaultProps: function() {
    return {
      size: 64,
      fill: 'currentcolor'
    }
  },

  render: function() {
    var size = this.props.size
    var fill = this.props.fill

    var viewBox = [0, 0, size, size].join(' ')

    var pathData = [
      ''
    ].join(' ')

    return (
      React.createElement("svg", {xmlns: "http://www.w3.org/svg/2000", 
        viewBox: viewBox, 
        width: size, 
        height: size, 
        fill: fill}, 
        React.createElement("path", {d: pathData})
      )
    )
  }
})

module.exports = Identicon
