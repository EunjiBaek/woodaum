const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin(), new BundleAnalyzerPlugin()],
    };
  },
};
