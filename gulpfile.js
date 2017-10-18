const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync')
const reload = browserSync.reload

gulp.task('styles', function() {
    return gulp.src(path.resolve(__dirname, 'style/**/*.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve(__dirname, 'build')))
        .pipe(reload({stream:true}))
})

gulp.task('clean', function() {
    return del(['build'])
})

// watch
gulp.task('browser-sync', function() {
    let files = [
        '**/*.html',
        'style/**/*.scss',
        'assets/**/*',
        'src/**/*.js'
    ]

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    })
})

gulp.task('dev', ['styles', 'browser-sync'], function() {
    gulp.watch('style/**/*.scss', ['styles'])
 

})

gulp.task('default', ['clean'], function() {
    gulp.start('styles')
});