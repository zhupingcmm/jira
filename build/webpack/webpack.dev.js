const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3001,
    open: true,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
});
