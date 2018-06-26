'use strict';

var request = require('./request');

module.exports = function *(options) {
  var pkg = options.pkg || {};
  var callback = options.callback;
  var name = pkg.name || options.name;
  var protocol = options.protocol || 'http';
  var host = options.host || 'registry.cnpmjs.org';
  var version = typeof options.version !== 'undefined' ? options.version : 'latest';

  var opt = {
    uri: `${protocol}://${host}/${name}/${version}`,
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
