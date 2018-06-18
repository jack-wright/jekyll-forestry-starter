const jsSrcPath = './src/_js/app.js';
const scssSrcPath = './src/_sass/style.scss';
const destPath = `./src/assets/build`;
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [jsSrcPath, scssSrcPath],
  output: {
      filename: `${destPath}/app.js`,
  },
  module: {
      rules: [
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
              })
          },
      ]
  },
  plugins: [
      new ExtractTextPlugin(`${destPath}/app.css`),
  ],
};
