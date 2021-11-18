# Grunt Basic Tasks
Grunt package ready to use, includes the basic tasks.

The tasks and libraries bellow will be installed ( see package.json file )
- Grunt: https://gruntjs.com/ 
- Grunt-contrib-concat: https://github.com/gruntjs/grunt-contrib-concat
- Grunt-contrib-jshint: https://github.com/gruntjs/grunt-contrib-jshint
- Grunt-contrib-uglify: https://github.com/gruntjs/grunt-contrib-uglify
- Grunt-contrib-watch: https://github.com/gruntjs/grunt-contrib-watch
- Grunt-sass: https://github.com/sindresorhus/grunt-sass
- Grunt-dart-sass: https://github.com/laurenhamel/grunt-dart-sass
- Grunt-concurrent: https://github.com/sindresorhus/grunt-concurrent
- Normalize-scss: https://github.com/JohnAlbin/normalize-scss
- Compass-mixins: http://compass-style.org/index/mixins/

At the time of this repository is created, all the modules requested for install are the latest versions.

# To use this package
You need to have installed NODE.js and the variable npm should be recognized in the console ( globally )

# To compile the SCSS 
You should install LibSass: http://sass-lang.com/libsass

# Install
open Terminal/CMD, go to your project where you have copied the folders ( assets / grunt-assets ).<br/>
Go to folder "grunt-assets" and run "npm install". <br/>
After it's done installing, type "grunt" in the console to run it.

Will have more details explained in an article at the URL: http://www.wpriders.com/blog/

# Important
Grunt dart sass library has a bug that is very easy to fix. Maybe they will implement the fix in the future. 
You know your library has the bug when CSS is not compiled.

How to fix:
- Go to `node_modules/grunt-dart-sass/tasks` and open the file `dart-sass.js`
- Fin the line `if( !src || _.startsWith(path.basename(src), '_') ) return;`
- Replace `return` with `continue`.

Expected result result `if( !src || _.startsWith(path.basename(src), '_') ) continue;`