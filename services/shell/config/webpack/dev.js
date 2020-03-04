// development config
const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    `webpack-dev-server/client?http://localhost:${process.env.SERVICE_PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.js" // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server,
    historyApiFallback: true,
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
