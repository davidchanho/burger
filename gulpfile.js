var gulp = require('gulp'); // Task runner.
var pug = require('gulp-pug'); // allows gulp to work with pug files
var sass = require('gulp-sass'); // allows gulp to work with sass files
var rename = require('gulp-rename'); // allows gulp to rename files and folders

// sets task to convert pug into html
gulp.task('pug', function() {
	return gulp
		.src('./**/template.pug') // file location of the pug file
		.pipe(
			pug({
				doctype: 'html', // file type to be converted to
				pretty: true, // formats the file after conversion
			})
		)
		.pipe(rename({ basename: 'index', dirname: '' })) // renames file and directory
		.pipe(gulp.dest('./public')); // location of where html will be sent after task is done
});

// sets task to convert sass into css
gulp.task('sass', function() {
	return gulp
		.src('./**/burger_style.sass')
		.pipe(
			sass({
				doctype: 'css',
				pretty: true,
			})
		)
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest('./public/assets/css/'));
});

// runs several tasks at once
gulp.task('start', gulp.parallel('pug', 'sass'));