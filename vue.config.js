const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.optimization = {
      minimize: true,
      splitChunks: {
        chunks: "all",
      },
      minimizer: [new TerserPlugin(), new BundleAnalyzerPlugin()],
    };
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
