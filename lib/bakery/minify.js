var minify = module.exports = function(options) {
	var compressor = require('node-minify');
	var bakery = require('../bakery');

	bakery.cli('concat');

	var glob = require('glob');
	var i;
	var total = options.files.length;

	var callback = function() {
		total--;

		if (total === 0) {
			console.log('Finished minify');
		}
	};

	for (i in options.files) {
		if (options.files.hasOwnProperty(i)) {
			var files = glob.sync(options.files[i]['in']);

			new compressor.minify({
				type: options.type,
				fileIn: files,
				tempPath: options.tmpDir,
				fileOut: options.files[i].out,
				callback: callback
			});
		}
	}
};