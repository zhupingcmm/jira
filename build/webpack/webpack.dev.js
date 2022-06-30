const WebpackCleanPlugin = require("webpack-clean-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../../src/index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new WebpackCleanPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../src/index.html"),
      hash: false,
      filename: "index.html",
    }),
  ],
};
