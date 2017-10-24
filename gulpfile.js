var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	jshint = require('gulp-jshint'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),

	// variables for the working folder
	root = '../portfolio/',
	scss = root + 'scss/',
	css = root + 'styles/',
	js = root + 'scripts/';


// CSS via Sass and Autoprefixer
gulp.task('css', function() {
	return gulp.src(scss + '{main.scss,rtl.scss}')
	.pipe(sourcemaps.init())
	.pipe(sass({
      outputStyle: 'compact',
      precision: 10
	}).on('error', sass.logError))
	.pipe(postcss([
		autoprefixer('last 2 versions', '> 1%')
	]))
	.pipe(sourcemaps.write(css + 'maps'))
	.pipe(gulp.dest(root));
});

// JavaScript
gulp.task('javascript', function() {
	return gulp.src([js + 'main.js'])
	.pipe(jshint())//checks the js files for errors and reports it
	.pipe(jshint.reporter('default'));
});


// Watch everything
gulp.task('watch', function() {
	gulp.watch([root + css + '*.css', root + '**/*.scss' ], ['css']);
	gulp.watch(js + '**/*.js', ['javascript']);
});


// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['watch']);
