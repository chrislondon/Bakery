/**
 * Bakery
 */

// Nodejs libs.
var path = require('path');

// The module to be exported.
var bakery = module.exports = {};

// Expose internal bakery libs.
function bRequire(name) {
	return bakery[name] = require('./bakery/' + name);
}

var bake = bRequire('bake');
var cli = bRequire('cli');
var server = bRequire('server');
var watch = bRequire('watch');
var concat = bRequire('concat');
var minify = bRequire('minify');
var views = bRequire('views');