const path = require("path");
const webpack = require("webpack");
const SRC_DIR = path.join(__dirname, "/src");

module.exports = {
  context: __dirname,
  entry: `${SRC_DIR}/ClientApp.jsx`,
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: false,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
