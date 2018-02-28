'use strict';

var request = require('co-request');

var logger = require('./logger');

module.exports = function *(options) {
  try {
    return yield request(options);
  } catch(err) {
    logger.warn('get remote update info failed.');

    if (err.code === 'ETIMEDOUT') {
      return null;
    }
  }
};
