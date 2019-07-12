const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  module: {
    rules: [{
      test: /\.css?$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    }]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../publicssr')
  },
}

module.exports = merge(config, clientConfig)