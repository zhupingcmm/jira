const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MyPlugin = require("./plugin/MyPlugin");
const { webpack } = require("webpack");

const PATHS = {
  src: path.join(__dirname, "../../src"),
};

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../../src/index.tsx"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  resolve: {
    // 扩展 打包 ts tsx js jsx json
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
      {
        test: /\.(css|scss|sass|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$i/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
    // new PurgeCssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../src/index.html"),
      favicon: path.resolve(__dirname, "../../static/favicon.ico"),
      hash: false,
      filename: "index.html",
    }),
    new MyPlugin(),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|@reduxjs\/toolkit|@tanstack\/react-query)[\\/]/,
          name: "react-family",
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
        },
        tool: {
          test: /[\\/]node_modules[\\/](qs|lodash)[\\/]/,
          name: "tool",
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
        },
        component: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          name: "antd",
          chunks: "all",
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
