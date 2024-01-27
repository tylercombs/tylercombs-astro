// postcss.config.cjs
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    /* other plugins */
    /* remove autoprefixer if you had it here, it's part of postcss-preset-env */
    postcssPresetEnv({
      /* pluginOptions */
      stage: 2,
    }),
  ],
};
