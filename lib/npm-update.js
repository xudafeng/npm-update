/* ================================================================
 * npm-update by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Aug 04 2015 11:20:24 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var request = require('./request');

module.exports = function *(options) {
  var pkg = options.pkg || {};
  var callback = options.callback;
  var name = pkg.name || options.name;
  var protocol = options.protocol || 'http';

  var opt = {
    uri: protocol + '://registry.npmjs.org/' + name + '/latest',
    method: 'get',
    timeout: options.timeout || 1000
  };

  var result = yield request(opt);

  if (result) {
    try {
      var data = JSON.parse(result.body);
      callback(null, data);
    } catch (e) {
      callback(e.stack);
    }
  } else {
    callback('no result');
  }
};
