const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const dotenv = require("dotenv");

const env = dotenv.config({ path: ".env.development" }).parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  console.log(next);
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: 3001,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
      },
    },
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new webpack.DefinePlugin(envKeys),
  ],
});
