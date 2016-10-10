var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('copy-html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('copy-images', function () {
    gulp.src('./src/img/*').pipe(gulp.dest('./dist/img'));
    gulp.src('./src/img/icons/*').pipe(gulp.dest('./dist/img/icons'));
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

gulp.task('build', function(cb) {
    exec('./node_modules/.bin/webpack', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('serve', ['sass', 'copy-html', 'copy-images', 'build'], function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/app/**/*.jsx', ['build']);
    gulp.watch('./src/index.html', ['copy-html']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);


    browserSync.init({
        server: "./dist"
    });
});

gulp.task('default', ['serve']);
