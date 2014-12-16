module.exports = function ( grunt ) {
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-html2js');

	var userConfig = require( './build.config.js' );

	var taskConfig = {
		pkg: grunt.file.readJSON("package.json"),

		meta: {
			banner: 
				'/**\n' +
				' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * <%= pkg.homepage %>\n' +
				' */\n'
		},

		bump: {
			options: {
				files: [
					"package.json", 
					"bower.json"
				],
				commit: false,
				commitMessage: 'chore(release): v%VERSION%',
				commitFiles: [
					"package.json", 
					"client/bower.json"
				],
				createTag: false,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: 'origin'
			}
		},    

		clean: [ 
			'<%= build_dir %>', 
			'<%= compile_dir %>'
		],

		copy: {
			build_app_assets: {
				files: [
					{ 
						src: [ '**' ],
						dest: '<%= build_dir %>/assets/',
						cwd: 'src/assets',
						expand: true
					}
			 ]   
			},
			build_vendor_assets: {
				files: [
					{ 
						src: [ '<%= vendor_files.assets %>' ],
						dest: '<%= build_dir %>/assets/',
						cwd: '.',
						expand: true,
						flatten: true
					}
				]   
			},
			build_appjs: {
				files: [
					{
						src: [ '<%= app_files.commonjs %>', '<%= app_files.routejs %>', '<%= app_files.appjs %>', '<%= app_files.mainjs %>' ],
						dest: '<%= build_dir %>/',
						cwd: '.',
						expand: true
					}
				]
			},
			build_vendorjs: {
				files: [
					{
						src: [ '<%= vendor_files.js %>' ],
						dest: '<%= build_dir %>/',
						cwd: '.',
						expand: true
					}
				]
			},
			build_vendorcss: {
				files: [
					{
						src: [ '<%= vendor_files.css %>' ],
						dest: '<%= build_dir %>/',
						cwd: '.',
						expand: true
					}
				]
			},
			compile_assets: {
				files: [
					{
						src: [ '**' ],
						dest: '<%= compile_dir %>/assets',
						cwd: '<%= build_dir %>/assets',
						expand: true
					},
					{
						src: [ '<%= vendor_files.css %>' ],
						dest: '<%= compile_dir %>/',
						cwd: '.',
						expand: true
					}
				]
			}
		},

		concat: {
			build_css: {
				src: [
					'<%= vendor_files.css %>',
					'<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
				],
				dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
			},

			compile_js: {
				options: {
					banner: '<%= meta.banner %>'
				},
				src: [ 
					'<%= vendor_files.js %>', 
					'module.prefix', 
					'<%= compile_js_files.commonjs %>',
					'<%= compile_js_files.routejs %>', 
					'<%= compile_js_files.appjs %>', 
					'<%= compile_js_files.mainjs %>',
					'<%= html2js.app.dest %>', 
					'<%= html2js.common.dest %>', 
					'module.suffix' 
				],
				dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
			}
		},

/*		ngmin: {
			compile: {
				files: [
					{
						src: [ '<%= app_files.commonjs %>', '<%= app_files.routejs %>', '<%= app_files.appjs %>', '<%= app_files.mainjs %>' ],
						cwd: '<%= build_dir %>',
						dest: '<%= build_dir %>',
						expand: true
					}
				]
			}
		},*/

		ngAnnotate: {
			compile: {
				files: [
					{
						src: [ '<%= app_files.commonjs %>', '<%= app_files.routejs %>', '<%= app_files.appjs %>', '<%= app_files.mainjs %>' ],
						cwd: '<%= build_dir %>',
						dest: '<%= build_dir %>',
						expand: true
					}
				]
			}
		},		

		uglify: {
			compile: {
				options: {
					banner: '<%= meta.banner %>'
				},
				files: {
					'<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
				}
			}
		},

		less: {
			build: {
				files: {
					'<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
				}
			},
			compile: {
				files: {
					'<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
				},
				options: {
					cleancss: true,
					compress: true
				}
			}
		},

		html2js: {
			app: {
				options: {
					base: 'src/app'
				},
				src: [ '<%= app_files.atpl %>' ],
				dest: '<%= build_dir %>/templates-app.js'
			},

			common: {
				options: {
					base: 'src/common'
				},
				src: [ '<%= app_files.ctpl %>' ],
				dest: '<%= build_dir %>/templates-common.js'
			}
		},

		index: {
			build: {
				dir: '<%= build_dir %>',
				src: [
					'<%= vendor_files.js %>',
					'<%= build_js_files.commonjs %>',
					 '<%= build_js_files.routejs %>', 
					 '<%= build_js_files.appjs %>', 
					 '<%= build_js_files.mainjs %>',
					'<%= html2js.common.dest %>',
					'<%= html2js.app.dest %>',
					'<%= vendor_files.css %>',
					'<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
				]
			},

			compile: {
				dir: '<%= compile_dir %>',
				src: [
					'<%= concat.compile_js.dest %>',
					'<%= vendor_files.css %>',
					'<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
				]
			}
		},

		delta: {
			options: {
				livereload: true
			},

			gruntfile: {
				files: 'Gruntfile.js',
				tasks: [],
				options: {
					livereload: false
				}
			},

			jssrc: {
				files: [ 
					'<%= app_files.commonjs %>', '<%= app_files.routejs %>', '<%= app_files.appjs %>', '<%= app_files.mainjs %>'
				],
				tasks: [ 'copy:build_appjs' ]
			},

			assets: {
				files: [ 
					'src/assets/**/*'
				],
				tasks: [ 'copy:build_app_assets', 'copy:build_vendor_assets' ]
			},

			html: {
				files: [ '<%= app_files.html %>' ],
				tasks: [ 'index:build' ]
			},

			tpls: {
				files: [ 
					'<%= app_files.atpl %>', 
					'<%= app_files.ctpl %>'
				],
				tasks: [ 'html2js' ]
			},

			less: {
				files: [ 'src/**/*.less' ],
				tasks: [ 'less:build' ]
			}
		}
	};

	grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

	grunt.renameTask( 'watch', 'delta' );

	grunt.registerTask( 'watch', [ 'build', 'delta' ] );

	grunt.registerTask( 'default', [ 'build', 'compile' ] );

	grunt.registerTask( 'build', [
		'clean', 'html2js', 'less:build',
		'concat:build_css', 'copy:build_app_assets', 'copy:build_vendor_assets',
		'copy:build_appjs', 'copy:build_vendorjs', 'copy:build_vendorcss', 'index:build'
	]);

	grunt.registerTask( 'compile', [
		'less:compile', 'copy:compile_assets', 'ngAnnotate', 'concat:compile_js', 'uglify', 'index:compile'
	]);

	function filterForJS ( files ) {
		return files.filter( function ( file ) {
			return file.match( /\.js$/ );
		});
	}

	function filterForCSS ( files ) {
		return files.filter( function ( file ) {
			return file.match( /\.css$/ );
		});
	}

	grunt.registerMultiTask( 'index', 'Process index.html template', function () {
		var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g' );
		var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
			return file.replace( dirRE, '' );
		});
		var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
			return file.replace( dirRE, '' );
		});

		grunt.file.copy('src/index.html', this.data.dir + '/index.html', { 
			process: function ( contents, path ) {
				return grunt.template.process( contents, {
					data: {
						scripts: jsFiles,
						styles: cssFiles,
						version: grunt.config( 'pkg.version' )
					}
				});
			}
		});
	});
};
