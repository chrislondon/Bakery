var bake = module.exports = function(options, branch, repo) {
	var bakery = require('../bakery');
	
	if (options[repo] === undefined) {
		console.error("Unable to find config for repo: " + repo);
		return;
	}

	var url = options[repo].url.replace('{branch}', branch);
	var subdir = options[repo].subdir.replace('{branch}', branch);
	var AdmZip = require('adm-zip');
	var request = require('request');
	var fs = require('fs');
	var out = fs.createWriteStream('out.zip');

	request(url, function() {
		var zip = new AdmZip('./out.zip');

		if (subdir) {
			zip.extractEntryTo(zip.getEntry(subdir), '.', false);
		} else {
			zip.extractAllTo('.');
		}
		
		fs.unlink('./out.zip');

		bakery.cli('minify');
	}).pipe(out);
};