# npm-update

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/npm-update.svg?style=flat-square
[npm-url]: https://npmjs.org/package/npm-update
[travis-image]: https://img.shields.io/travis/xudafeng/npm-update.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/npm-update
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/npm-update.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/npm-update?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/npm-update.svg?style=flat-square
[download-url]: https://npmjs.org/package/npm-update

> npm update

## Installment

```shell
$ npm i npm-update --save
```

## Usage

```javascript
var update = require('npm-update');
var pkg = require('../package');

update({
  pgk: pkg,
  callback: function(error, data) {
  }
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 xdf
