var webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};

module.exports = config;
