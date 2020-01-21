var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './dms_react/static/js/index',

  output: {
      path: path.resolve('./dms_react/static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  }

};