import htmlbeautify from "gulp-html-beautify";
import fileinclude from "gulp-file-include";
import htmlminify from "gulp-html-minify";

export const markup = () => {
  return config.gulp.src(config.path.src.markup)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(config.gulpif(!config.isProd, htmlbeautify({
      "indent_size": 2,
    })))
    .pipe(config.gulpif(config.isProd, htmlminify({
      collapseWhitespace: true,
    })))
    .pipe(config.gulp.dest(config.path.build.markup))
    .pipe(config.browserSync.stream())
}