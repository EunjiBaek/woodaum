const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin()],
    };
  },
};
