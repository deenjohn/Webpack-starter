const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
var package     = require('./package.json');

module.exports = (env)=>{

  console.log(env);
  return {
    devtool: "cheap-source-map",
    entry: {
      app : './src/index.js',
      vendor: Object.keys(package.dependencies)
    },
    node: {
      fs: 'empty'
    },
    output: {
      //filename: '[name].bundle.js',
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, 'dist')
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          resolve: { extensions: [".js",".jpg"] },
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              "plugins": ["@babel/plugin-transform-arrow-functions"]
            }
          }
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
      }
    ]
      
    },
    plugins: [
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        title: 'Learning Webpack'
      }),
        new webpack.ProgressPlugin(),
        // new webpack.SourceMapDevToolPlugin({
        //   filename: '[name].js.map',
        //   exclude: ['vendor.js']
        // })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000
    }
  }
};