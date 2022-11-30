const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
  build: {
    markup: `${buildFolder}/`,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    images: `${buildFolder}/assets`,
    sprite: `${buildFolder}/assets`
  },
  src: {
    markup: `${srcFolder}/*.html`,
    styles: [`${srcFolder}/styles/style.scss`, `${srcFolder}/styles/pages/*.scss`],
    scripts: `${srcFolder}/scripts/*.js`,
    images: {
      copy: `${srcFolder}/assets/images/**/*`,
      generate: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png}`
    },
    sprite: `${srcFolder}/images/svg/*`,
  },
  watch: {
    markup: `${srcFolder}/**/*.html`,
    styles: `${srcFolder}/**/*.scss`,
    scripts: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/assets/images/**/*`,
    sprite: `${srcFolder}/assets/images/svg/*`
  },
  alias: {
    '@shared': './src/shared',
    '@partials': './src/partials',
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  zip: `${buildFolder}/**/*`
}