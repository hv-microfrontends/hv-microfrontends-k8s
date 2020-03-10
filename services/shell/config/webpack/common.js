// shared config (dev and prod)
const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { BASE_PATH, ENV_KEYS, SERVICE_ID } = require("./utils");

module.exports = {
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  context: `${BASE_PATH}/src`,
  output: {
    path: resolve(__dirname, "../../build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          "file-loader?name=[name].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      },
      {
        test: /\.svg$/i,
        exclude: /assets/,
        loaders: ["file-loader"]
      },
      {
        test: /\.svg$/i,
        include: /assets/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(ENV_KEYS),
    new HtmlWebpackPlugin({
      template: `${BASE_PATH}/public/index.html`
    }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {
        id: SERVICE_ID,
        name: process.env.SERVICE_NAME
      }
    })
  ]
};
