const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/,/\.\/build/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
    new Dotenv()
  ],
  stats: 'errors-only',
}