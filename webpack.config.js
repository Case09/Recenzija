const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      // Css loaders, using extract text plugin to import cass FILE as dependeny to dist/index.html
      {test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })},
      {
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
    new ExtractTextPlugin('app.css')
  ]
}