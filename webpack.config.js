const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const port = process.env.WEBPACK_PORT || 8080;

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    client: path.join(__dirname, 'src/client.js')
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true,
      chunks: false
    },
    host: 'localhost',
    port: port
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  postcss: () => [autoprefixer],

  plugins: [
    new HtmlPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Title',
      appMountId: 'root',
      inject: false,
      mobile: true
    }),

    new webpack.HotModuleReplacementPlugin(),
  ]
};
