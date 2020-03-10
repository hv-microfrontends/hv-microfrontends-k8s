// production config
const merge = require("webpack-merge");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "js/bundle.[hash].min.js"
  },
  externals: [
    {
      react: "React",
      "react-dom": "ReactDOM"
    }
  ],
  devtool: "source-map",
  plugins: []
});
