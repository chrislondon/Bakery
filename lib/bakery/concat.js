var concat = module.exports = function(options) {
	var fs = require('fs');
	var glob = require('glob');
	var i;
	var bakery = require('../bakery');

	bakery.cli('views');

	var concat = function(folder, destination, require) {
		if (require === undefined) {
			require = true;
		}

		var list, i, loaded = {}, data = '';

		console.log('Building ' + destination + '...');

		var files = glob.sync(folder);


		var loadFile = function(filename) {
			var i, fileData, requires, pattern = /require\(('|")(.*)('|")\);/gi;

			if (loaded[filename] !== undefined) {
				return;
			}

			fileData = '' + fs.readFileSync(filename);

			if (require) {
				// find requires
				requires = fileData.match(pattern);

				if (requires !== null) {
					for (i in requires) {
						if (requires.hasOwnProperty(i)) {
							loadFile(requires[i].substr(9, requires[i].length - 12));
						}
					}
				}

				fileData = fileData.replace(pattern, '');
			}

			console.log('Loading file ' + filename);
			loaded[filename] = true;
			data += fileData + "\n\n";
		};

		for (i in files) {
			if (files.hasOwnProperty(i)) {
				loadFile(files[i]);
			}
		}

		fs.writeFileSync(destination, data);
		console.log('done');
	};

	for (i in options) {
		if (options.hasOwnProperty(i)) {
			concat(options[i]['in'], options[i].out, options[i].require);
		}
	}
};