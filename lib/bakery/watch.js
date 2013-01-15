/**
 * Bakery -> CLI
 */

var watch = module.exports = function(options) {
	var bakery = require('../bakery');
	var path = require('path');
	var watch = require('watch');
	
	bakery.cli('minify');

	console.log(options.path);

	watch.watchTree(path.resolve(options.path), function (f, curr, prev) {
		if (typeof f === "object" && prev === null && curr === null) {
			// Finished walking the tree
			console.log("Watching for changes");
		} else {
			// f was changed
			console.log(f + ' was changed');
			bakery.cli('minify');
		}
	});
};