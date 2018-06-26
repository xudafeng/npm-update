'use strict';

var co = require('co');

var update = require('../lib/npm-update');

var pkg = {
  name: 'npm-update'
};

describe('#npm-update', function() {
  this.timeout(50 * 1000);

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
