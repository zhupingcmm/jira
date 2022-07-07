const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const dotenv = require("dotenv");

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((pre, next) => {
  pre[`process.env.${next}`] = JSON.stringify(env[next]);
  return pre;
}, {});

module.exports = merge(common, {
  mode: "production",
  plugins: [new webpack.DefinePlugin(envKeys), new BundleAnalyzerPlugin()],
});
