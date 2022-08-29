const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const IS_LIVE = process.env.NODE_ENV === "production";
const MIN_EXT = IS_LIVE ? ".min" : "";

module.exports = {
  productionSourceMap: false,
  css: {
    extract: {
      filename: `css/[name]${MIN_EXT}.css`,
      chunkFilename: `css/chunk/[name]${MIN_EXT}.css`,
    },
  },
  chainWebpack: (config) => {
    config.output
      .filename(`js/[name]${MIN_EXT}.js`)
      .chunkFilename(`js/chunk/[name]${MIN_EXT}.js`);
    config.when(!IS_LIVE, (config) => {
      config.devtool("source-map");
    });
    config.optimization.merge({
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: "chunk/vendors",
          },
          common: {
            name: "chunk/common",
          },
        },
      },
    });
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
