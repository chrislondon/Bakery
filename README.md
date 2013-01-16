# bakery
Bakery is a task-based command line build tool for PieJS projects.

_Please try it out in a project, and [make suggestions][issues] or [report bugs][issues]!_

## Getting started

Run `bakery bake apple pie` to create pie application with the apple release

Run `bakery server` to create static server

## Built-in tasks

* concat - Concatenate files.
* bake - Generate project scaffolding from a predefined template.
* minify - Minify files with [UglifyJS][uglify].
* server - Start a static web server.
* watch - Run predefined tasks whenever watched files change.
* views - Compile html views

_(Not yet implemented tasks)_
* lint - Validate files with [JSHint][jshint].
* qunit - Run [QUnit][qunit] unit tests in a headless [PhantomJS][phantom] instance.
* test - Run unit tests with [nodeunit][nodeunit].

_(More documentation coming)_

## Installing bakery

Bakery is available as an [npm][npm] module. If you install bakery globally via `npm install -g bakery`, it will be available for use in all of your projects.

## Release History

* 2013/01/14 - v0.0.x - Initial development releases.

[issues]: https://github.com/chrislondon/Bakery/issues
[node]: http://nodejs.org/
[npm]: http://npmjs.org/
[jshint]: http://www.jshint.com/
[uglify]: https://github.com/mishoo/UglifyJS/
[nodeunit]: https://github.com/caolan/nodeunit
[qunit]: http://docs.jquery.com/QUnit
[phantom]: http://www.phantomjs.org/