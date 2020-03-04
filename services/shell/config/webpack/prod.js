// production config
const merge = require("webpack-merge");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const commonConfig = require("./common");

const externals = [
  {
    module: "react",
    entry: "//unpkg.com/react@16/umd/react.production.min.js",
    global: "React"
  },
  {
    module: "react-dom",
    entry: "//unpkg.com/react-dom@16/umd/react-dom.production.min.js",
    global: "ReactDOM"
  }
];

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "js/bundle.[hash].min.js"
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: externals
    })
  ]
});
