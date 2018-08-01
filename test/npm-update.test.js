'use strict';

const assert = require('assert');

const pkg = require('../package.json');
const update = require('../lib/npm-update');

describe('#npm-update', function () {
  it('package is latest', function * () {
    const res = yield update({
      pkg: {
        name: 'macaca-datahub',
        version: '0.1.0',
      },
      version: '0.1',
      host: 'registry.cnpmjs.org',
    });
    assert.deepStrictEqual(res, {
      needUpdate: false,
    });
  });

  it('package is outdated', function * () {
    const res = yield update({
      pkg: {
        ...pkg,
        version: '0.0.1',
      },
      host: 'registry.cnpmjs.org',
    });
    assert.deepStrictEqual(res, {
      needUpdate: true,
      version: pkg.version,
    });
  });

  it('set compared version', function * () {
    const res = yield update({
      pkg: {
        name: 'macaca-datahub',
        version: '2.0.0',
      },
      version: '2',
      host: 'registry.cnpmjs.org',
    });
    assert(res.needUpdate === true);
    assert(res.version);
  });

  it('set compared tag', function * () {
    const res = yield update({
      pkg: {
        name: 'macaca-datahub',
        version: '2.0.0',
      },
      version: 'next',
      host: 'registry.cnpmjs.org',
    });
    assert(res.needUpdate === true);
    assert(res.version);
  });

  it('compared version not found', function * () {
    const res = yield update({
      pkg: {
        name: 'webpack-seed-project',
        version: '1.0.0',
      },
      version: '0.1',
      host: 'registry.cnpmjs.org',
    });
    assert(res.needUpdate === false);
  });

  it('thorws if package.json not set', function * () {
    try {
      yield update();
      assert.fail();
    } catch (e) {
      assert(e.message === 'can\'t get package.json name');
    }
  });

  it('thorws if name of version is not found', function * () {
    try {
      yield update({
        pkg: {
          version: '2.0.0',
        },
        host: 'registry.cnpmjs.org',
      });
      assert.fail();
    } catch (e) {
      assert(e.message === 'can\'t get package.json name');
    }

    try {
      yield update({
        pkg: {
          name: 'macaca-datahub',
        },
        host: 'registry.cnpmjs.org',
      });
      assert.fail();
    } catch (e) {
      assert(e.message === 'can\'t get package.json version');
    }
  });

  it('silent mode', function * () {
    const res = yield update({
      pkg: {
        name: 'macaca-datahub',
        version: '2.0.0',
      },
      version: 'next',
      host: 'registry.cnpmjs.org',
      silent: true,
    });
    assert(res.needUpdate === true);
    assert(res.version);
  });
});
