const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dotenv = require("dotenv");

const env = dotenv.config().parsed;
console.log("env");
const envKeys = Object.keys(env).reduce((pre, next) => {
  pre[`process.env.${next}`] = JSON.stringify(env[next]);
  return pre;
}, {});

module.exports = merge(common, {
  mode: "production",
  plugins: [new webpack.DefinePlugin(envKeys)],
});
