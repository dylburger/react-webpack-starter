const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './app',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader', 'babel-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
};
