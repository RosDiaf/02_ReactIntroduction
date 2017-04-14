var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: ['./index.html', './routes.js'],
output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  plugins: [
    /*jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',*/

    //new ExtractTextPlugin('./dist/css/style.css');
  ],
  devServer: {
    historyApiFallback: true
  }
};
