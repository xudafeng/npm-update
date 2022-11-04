# npm-update

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/npm-update.svg
[npm-url]: https://npmjs.org/package/npm-update
[travis-image]: https://img.shields.io/travis/xudafeng/npm-update.svg
[travis-url]: https://travis-ci.org/xudafeng/npm-update
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/npm-update.svg
[coveralls-url]: https://coveralls.io/r/xudafeng/npm-update?branch=master
[codecov-image]: https://img.shields.io/codecov/c/github/xudafeng/npm-update.svg
[codecov-url]: https://codecov.io/gh/xudafeng/npm-update/branch/master
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/npm-update.svg
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

- options {Object}
  - **pkg** `Object` package.json object.
  - **host** `string` registry host, default is **registry.npmjs.org**.
  - **timeout** `number` request registry timeout, default is **3000ms**.
  - **version** `string` base version for comparing, can be npm tag or npm version, default is **latest**.
  - **silent** `boolean` if slient is true, will not print message, default is **false**.

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/2139038?v=4" width="100px;"/><br/><sub><b>zhangyuheng</b></sub>](https://github.com/zhangyuheng)<br/>|[<img src="https://avatars.githubusercontent.com/u/5086369?v=4" width="100px;"/><br/><sub><b>brunoyang</b></sub>](https://github.com/brunoyang)<br/>|
| :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Sun Jul 18 2021 11:29:13 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

## License

The MIT License (MIT)
