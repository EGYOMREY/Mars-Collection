var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin');

//Watch our files
//How does this work: gulp.watch('what-to-watch', ['which', 'tasks', 'to', 'run']);
gulp.watch("src/scss/**/*.scss", ['scss-watch']);
gulp.watch("src/index.html", ['content-watch']);
gulp.watch('src/js/*.js', ['script-watch']);
gulp.watch('src/img/**/*', ['image-watch']);


// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
      server: "./build"
  });


// this runs the tasks that are being watched, which run the required scripts
gulp.task('scss-watch', ['styles'], browserSync.reload);
gulp.task('content-watch', ['content'], browserSync.reload);
gulp.task('image-watch', ['images'], browserSync.reload);
gulp.task('script-watch', ['scripts'], browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
  return gulp.src("src/scss/**/*.scss")
    .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

// Minify and concat our HTML
gulp.task('content', function() {
  return gulp.src("src/index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});


// Copy our images to the production folder
gulp.task('images', function() {
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('build/img'));
});

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concatify('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'));
});


//we deploy all our tasks by typing gulp
gulp.task('default', ['styles', 'content', 'scripts', 'serve']);




    
