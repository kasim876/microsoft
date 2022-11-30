import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

export const sprite = () => {
  return config.gulp.src(config.path.src.sprite)
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      },
    }))
    .pipe(config.gulp.dest(config.path.build.sprite))
}