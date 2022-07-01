const path = require("path");
const WebpackCleanPlugin = require("webpack-clean-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../../src/index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@src": path.resolve(__dirname, "../../src"),
    },
  },
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
      favicon: path.resolve(__dirname, "../../static/favicon.ico"),
      hash: false,
      filename: "index.html",
    }),
  ],
};
