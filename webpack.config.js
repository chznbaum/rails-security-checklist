const path = require('path');
module.exports = {
  entry: {
    app: './app/assets/js/app.js',
    vendor: './app/assets/js/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/js"),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}