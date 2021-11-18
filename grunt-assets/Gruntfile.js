module.exports = function ( grunt ) {
	// Project configuration.
	grunt.initConfig( {
		concurrent: { // More info https://github.com/sindresorhus/grunt-concurrent
			css_and_js: {
				tasks: [ 'watch:StyleSheet', 'watch:JavaScript' ],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		path: {
			build: {
				src: '../assets',
				js: 'js',
				css: 'css'
			},
			js: 'js',
			css: 'css'
		},

		jshint: {
			files: [ 'Gruntfile.js', 'files_javascript/*.js' ],
			options: { // http://jshint.com/docs/options/
				curly: true,
				eqnull: true,
				eqeqeq: false,
				undef: false,
				asi: true,
				globals: {
					jQuery: true,
					console: true,
					module: false
				}
			}
		},

		// Grunt-sass
		'dart-sass': {
			target: {
				options: {
					//implementation: 'sass',
					sourceMap: true,
					outputStyle: 'expanded' // dart-sass only uses compressed, expanded.  // other values nested, compact, compressed, expanded.
					//imagePath: "../assets/images/"
				},

				// Takes every file that ends with .scss from the files_scss
				// directory and compile them into the ../assets/css directory.
				// Also changes the extension from .scss into .css.
				// Note: file name that begins with _ are ignored automatically
				files: [ {
					expand: true,
					cwd: 'files_scss/',
					src: [ '*.scss' ],
					dest: '../assets/css',
					ext: '.css'
				} ]
			}
		},

		// Grunt-contrib-watch
		watch: {
			StyleSheet: {
				// Watches all Sass or Scss files within the scss folder and one level down.
				// If you want to watch all scss files instead, use the "**/*" globbing pattern
				files: [ 'files_scss/{,*/}*.{scss,sass}' ],
				// runs the task `sass` whenever any watched file changes
				tasks: [ 'dart-sass:target' ],
				options: {
					// Sets livereload to true for livereload to work
					// (livereload is not covered in this article)
					livereload: false
				}
			},
			JavaScript: {
				// Watches all Sass or Scss files within the scss folder and one level down.
				// If you want to watch all scss files instead, use the "**/*" globbing pattern
				files: [ '<%= jshint.files %>' ],
				// runs the task `sass` whenever any watched file changes
				tasks: [ 'concat', 'uglify:dist', 'jshint' ],
				options: {
					// Sets livereload to true for livereload to work
					// (livereload is not covered in this article)
					livereload: false
				}
			}
		},

		concat: {
			options: {
				separator: '\n'
			},
			dist: {
				src: [ 'files_javascript/**/*.js' ],
				dest: '../assets/js/main-project.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! Created by <Project-Name> \n On <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'../assets/js/main-project.min.js': [ '<%= concat.dist.dest %>' ]
				}
			}
		}
	} );

	// Loads Grunt Tasks
	grunt.loadNpmTasks( 'grunt-concurrent' );

	//grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks( 'grunt-dart-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );

	// Default task(s).
	grunt.registerTask( 'default', [ 'concurrent:css_and_js' ] );
	grunt.registerTask( 'css', [ 'watch:StyleSheet' ] );
	grunt.registerTask( 'js', [ 'watch:JavaScript' ] );
};
