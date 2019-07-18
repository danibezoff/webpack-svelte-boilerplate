const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

let common = {
  entry: './src/main.js',
  output: { filename: '[name].[contenthash].js' },
  devServer: { contentBase: './dist' },
  module: {
    rules: [{
      test: /\.svelte$/,
      exclude: /node_modules/,
      use: { loader: 'svelte-loader' }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  optimization: { runtimeChunk: 'single' }
}

module.exports = common

// module.exports = (_, {mode}) => {
//   if(mode === 'development') {
//     return common
//   } else {
//     return merge(common, {
//     })
//   }
// }
