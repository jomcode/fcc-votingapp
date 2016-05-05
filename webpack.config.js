const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const isHot = !isProduction && process.env.NODE_ENV === 'development';

const port = process.env.WEBPACK_PORT || 8080;

function getDevTool() {
  if (isProduction) return 'source-map';
  return 'eval-source-map';
}

function getModuleLoaders() {
  const loaders = [];

  loaders.push({
    test: /\.(js|jsx)$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
  });

  if (isProduction) {
    loaders.push({
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
    });
  }

  if (!isProduction) {
    loaders.push({
      test: /(\.scss|\.css)$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    });
  }

  return loaders;
}

function getDevServer() {
  if (!isProduction) {
    return {
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
    };
  }
  return null;
}

function getPlugins() {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
    new HtmlPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'Free Code Camp - Voting App',
      appMountId: 'root',
      inject: false,
      mobile: true
    })
  ];

  if (isProduction) {
    plugins.push(
      new ExtractTextPlugin('style.css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    );
  }

  if (isHot) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}

module.exports = {
  devtool: getDevTool(),

  entry: {
    client: path.join(__dirname, 'src/client.js')
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },

  devServer: getDevServer(),

  module: {
    loaders: getModuleLoaders()
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },

  postcss: () => [autoprefixer],

  plugins: getPlugins()
};
