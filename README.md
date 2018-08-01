# npm-update

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/npm-update.svg?style=flat-square
[npm-url]: https://npmjs.org/package/npm-update
[travis-image]: https://img.shields.io/travis/macacajs/npm-update.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/npm-update
[coveralls-image]: https://img.shields.io/coveralls/macacajs/npm-update.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/npm-update?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/npm-update.svg?style=flat-square
[download-url]: https://npmjs.org/package/npm-update

> npm update

## Installment

```bash
$ npm i npm-update --save
```

## Usage

```javascript
const update = require('npm-update')
const pkg = require('../package.json')

(async () => {
  const { needUpdate } = await update({ pkg })
  if (needUpdate) return
  // do some stuff
})()
```

If `needUpdate` is `true`, print message:

```
╭─────────────────────────────────────────╮
│                                         │
│   new version x.y.z found               │
│                                         │
│   run npm i name@x -g                   │
│                                         │
╰─────────────────────────────────────────╯
```

## Options

```javascript
const {
  needUpdate,               // return true | false
  version: latestVersion,   // return version if needUpdate
} = await update(options)
```

- options {object}
  - **pkg** {object} package.json object.
  - **host** {String} registry host, default is **registry.npmjs.org**.
  - **timeout** {Number} request registry timeout, default is **3000ms**.
  - **version** {String} base version for comparing, can be npm tag or npm version, default is **latest**.
  - **silent** {Boolean} if slient is true, will not print message, default is false.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars3.githubusercontent.com/u/5086369?v=4" width="100px;"/><br/><sub><b>brunoyang</b></sub>](https://github.com/brunoyang)<br/>|[<img src="https://avatars1.githubusercontent.com/u/2139038?v=4" width="100px;"/><br/><sub><b>zhangyuheng</b></sub>](https://github.com/zhangyuheng)<br/>
| :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto upated at `Tue Jun 26 2018 22:22:45 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
