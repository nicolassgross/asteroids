const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },

      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/src/exemplos/[name].[ext]'
        }
      }
    ]
  },

  entry: '/src/exemplos/test-phaser.ts',

  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "./")
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: "./src/exemplos/index.html"
    })
  ],

  resolve: {
    extensions: ['.ts', '.js']
  }
};
