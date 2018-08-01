'use strict';

const chalk = require('chalk');
const boxen = require('boxen');
const urllib = require('urllib');
const assert = require('assert');
const semver = require('semver');

module.exports = options => {
  return npmUpdate(options)
    .then(res => res)
    .catch(e => {
      throw e;
    });
  async function npmUpdate (options = {}) {
    const pkg = options.pkg || {};
    const packageName = pkg.name;
    const packageVersion = pkg.version;
    assert(packageName, 'can\'t get package.json name');
    assert(packageVersion, 'can\'t get package.json version');
    const protocol = options.protocol || 'http';
    const host = options.host || 'registry.npmjs.org';
    const version = typeof options.version !== 'undefined' ? options.version : 'latest';
    let silent = false;
    if (typeof options.silent !== 'undefined') {
      silent = options.silent;
    }

    const url = `${protocol}://${host}/${packageName}/${version}`;
    const opt = {
      timeout: options.timeout || 3000,
      dataType: 'json',
    };

    const result = await urllib.request(url, opt);
    const latestVersion = result.data.version;

    if (!latestVersion) {
      return {
        needUpdate: false,
      };
    }
    if (semver.gt(latestVersion, packageVersion)) {
      if (!silent) {
        console.log(boxen(
          `new version ${chalk.cyan(latestVersion)} found

run ${chalk.cyan(`npm i ${packageName}@${semver.major(latestVersion)} -g`)}`,
          {
            padding: 1,
            borderStyle: 'round',
            borderColor: 'cyan',
          }
        ));
      }
      return {
        needUpdate: true,
        version: latestVersion,
      };
    }

    return {
      needUpdate: false,
    };
  }
};
