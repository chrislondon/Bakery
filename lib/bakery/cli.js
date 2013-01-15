/**
 * Bakery -> CLI
 */


var cli = module.exports = function(action, args) {
	var bakery = require('../bakery');
	var fs = require('fs');

	var options = {};
	var defaults = {};
	var overrides = {};

	// Get local Bakeryfile.json
	if (fs.existsSync('./Bakeryfile.json')) {
		overrides = JSON.parse(fs.readFileSync('./Bakeryfile.json'));
	}


	// Get module Bakeryfile.json
	defaults = require('../Bakeryfile.json');

	options = MergeRecursive(defaults, overrides);

	if (action === undefined) {
		action = process.argv[2];
		args   = process.argv.slice(3);
	} else if (args === undefined) {
		args = [];
	}
	
	bakery[action].apply(bakery[action], [options[action]].concat(args));
};

function MergeRecursive(obj1, obj2) {
	for (var p in obj2) {
		try {
			// Property in destination object set; update its value.
			if ( obj2[p].constructor==Object ) {
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);

			} else {
				obj1[p] = obj2[p];
			}

		} catch(e) {
		// Property in destination object not set; create it and set its value.
		obj1[p] = obj2[p];

		}
	}

	return obj1;
}