/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-15 14:37:31
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-15 19:18:32
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [/*"react-hot-loader/patch",*/ './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      }
    ],
  },
  devServer: {
    static: {
      directory: './dist',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React app',
      template: './template/index.html',
      baseHref: '/',
      templateParameters: {
        mobile: true,
        lang: 'Fr-fr',
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // "react-dom": "@hot-loader/react-dom",
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    // config.output.filename = '[name].[hash].js';
  }

  if (argv.mode === 'development') {
  }

  // test argv.mode : development ou production

  return config;
};
