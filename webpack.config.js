const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// Use ExtractTextPlugin only in production mode
const isProduction = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
})

const cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // Css loaders, using extract text plugin to import sass FILE as dependeny to dist/index.html
      {
        test: /\.scss$/, 
        use: cssConfig
      },
      {
        // All js files going through babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // Gzip files
    compress: true,
    hot: true,
    // Show only errors in logs instead of all that green text
    stats: "errors-only",
    // Open proj in new browser window
    open: true
  },
  plugins: [
    // For making index.html in dist folder from template index.html
    new HtmlWebpackPlugin({
      title: "Project demo",
      minify: {
        collapseWhitespace: true,
      },
      // Hashes name of files in index.html so it's unique
      hash: true,
      template: './src/index.html'
    }),
    // Makes app.css in dist folder from sass file
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProduction,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}