var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["*.html", "app/*.js", "assets/**/*.*", "views/*"]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);