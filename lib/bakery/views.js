var views = module.exports = function(options) {
	var glob = require('glob');
	var fs = require('fs');
	var i, files = [], filename, filedir, targetDir, loaded = {};

	for (i in options) {
		if (options.hasOwnProperty(i)) {
			files = files.concat(glob.sync(options[i]));
		}
	}

	for (i in files) {
		if (files.hasOwnProperty(i)) {
			filename = (files[i].substr(0, 3) === 'App' ? files[i].substr(9) : files[i].substr(19)).toLowerCase();

			if (loaded[filename] !== undefined) {
				continue;
			}

			loaded[filename] = true;

			filedir = filename.split('/');
			filename = filedir.pop();
			filedir.join('/');

			targetDir = './webroot/views/' + filedir;

			if (!fs.existsSync(targetDir)) {
				fs.mkdirSync(targetDir, '755');
			}

			fs.writeFileSync(targetDir + '/' + filename, fs.readFileSync(files[i]));

			// copy file over
			console.log(filename);
		}
	}
};