# identicon-svg [![Build Status](https://secure.travis-ci.org/johnotander/identicon-svg.png?branch=master)](https://travis-ci.org/johnotander/identicon-svg)

Generate svg identicons

## TODO

- [X] Generate a basic proof of concept
- [ ] Use a string to generate the identicon (ensuring the same result for future calls with said string)
- [ ] Package this nicely
- [ ] Document all the things
- [ ] Demo site

## Installation

```bash
npm install --save identicon-svg
```

## Usage

```javascript
var identiconSvg = require('identicon-svg');

identiconSvg('johnotander@gmail.com');  // => "<svg />"
```

### Options

* `size` an integer representing the size of the desired identicon svg, default: `120`
* `colors` an array of possible colors for the identicon svg, default: any

### Development

`npm run build && npm run open`

## Acknowledgements

Couldn't have been done with the awesome [React Icons article](http://jxnblk.com/react-icons/) by [@jxnblk](https://twitter.com/jxnblk)

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
