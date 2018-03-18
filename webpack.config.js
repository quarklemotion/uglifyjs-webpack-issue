const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ] },
      { test: [/\/src\/(?:.*)\.js$/], use: { loader: 'babel-loader' } },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            // without `inline: 1` codemirror uglification creates a runtime error due to bad function inlining
            // ref: https://github.com/webpack/webpack/issues/6760
            // ref: https://github.com/webpack/webpack/issues/6567#issuecomment-369554250
            inline: 1,
          },
          parallel: true,
        },
      }),
    ]
  }
};
