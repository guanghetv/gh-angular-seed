module.exports = {
	build_dir: 'build',
	
	build_js_files: {
		commonjs: [ 'src/common/**/*.js' ],
		routejs: [ 'src/route/**/*.js' ],
		appjs: [ 'src/app/**/*.js' ],
		mainjs: [ 'src/main.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ]
	},

	compile_dir: 'bin',

	compile_js_files: {
		commonjs: [ 'build/src/common/**/*.js' ],
		routejs: [ 'build/src/route/**/*.js' ],
		appjs: [ 'build/src/app/**/*.js' ],
		mainjs: [ 'build/src/main.js', '!build/src/**/*.spec.js', '!build/src/assets/**/*.js' ]
	},

	app_files: {
		js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],    
		commonjs: [ 'src/common/**/*.js' ],
		routejs: [ 'src/route/**/*.js' ],
		appjs: [ 'src/app/**/*.js' ],
		mainjs: [ 'src/main.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
		
		atpl: [ 'src/app/**/*.tpl.html' ],
		ctpl: [ 'src/common/**/*.tpl.html' ],

		html: [ 'src/index.html' ],
		less: 'src/less/main.less'
	},

	vendor_files: {
		js: [
			'vendor/angular/angular.js',
			'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
			'vendor/angular-route/angular-route.js'
		],
		css: [
		],
		assets: [
		]
	},
};
