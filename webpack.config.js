const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './views/build');
var APP_DIR = path.resolve(__dirname, './src/client/js');

const config = {
   entry: {
     'main': APP_DIR + '/index.js',
     'projects': APP_DIR + '/projects.js'
   },
   output: {
     filename: '[name]_bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'] // Transpiles JSX and ES6
         }
       }]
     }
    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './../index.html',
      chunks: ['main'],
      template: path.resolve(__dirname + '/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: './../projects.html',
      chunks: ['projects'],
      template: path.resolve(__dirname + '/index.html')
    })
  ]
};

module.exports = config;

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// var path = require('path');
//
// var BUILD_DIR = path.resolve(__dirname, './views/build');
// var APP_DIR = path.resolve(__dirname, './src/client');
//
// module.exports = {
//   entry: {
//    main: APP_DIR + '/index.js'
//   },
//   output: {
//    filename: 'index_bundle.js',
//    path: BUILD_DIR,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: 'index.html'
//     })
//   ]
// }
