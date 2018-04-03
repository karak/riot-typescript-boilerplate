const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'index': [
      path.resolve(__dirname, 'index.ts')
    ]
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: {
          loader: 'riot-tag-loader',
          query: { hot: true, sourceMap: false }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Riot application',
      lang: 'en',
      template: 'index.html'
    })
  ]
};
