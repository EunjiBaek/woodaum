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
      splitChunks: {
        chunks: "all",
      },
      minimizer: [new TerserPlugin()],
    };
  },
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
