/* ================================================================
 * npm-update by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Aug 04 2015 11:20:24 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var update = require('../lib/npm-update');
var co = require('co');

var pkg = {
  name: 'npm-update'
};

describe('#npm-update', function() {
  this.timeout(50000);

  it('only pkg', function(done) {
    co(update, {
      pkg: pkg,
      callback: function(err, data) {
        data.name.should.be.eql(pkg.name);
        done();
      }
    });
  });

  it('only name', function(done) {
    co(update, {
      name: pkg.name,
      callback: function(err, data) {
        data.name.should.be.eql(pkg.name);
        done();
      }
    });
  });

  it('pkg.name and name are same', function(done) {
    co(update, {
      pkg: pkg,
      name: pkg.name,
      callback: function(err, data) {
        data.name.should.be.eql(pkg.name);
        done();
      }
    });
  });

  it('pkg.name and name are different', function(done) {
    co(update, {
      pkg: 'express',
      name: 'koa',
      callback: function(err, data) {
        data.name.should.be.eql('koa');
        done();
      }
    });
  });
});
