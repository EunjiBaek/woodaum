const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()],
    };
  },
};
