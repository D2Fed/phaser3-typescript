var path = require('path');
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/boilerplate/game.ts',
  // entry: './src/games/alpha-adjust/game.ts',
  // entry: './src/games/asteroid/game.ts',
  // entry: './src/games/blockade/game.ts',
  // entry: './src/games/coin-runner/game.ts',
  // entry: './src/games/flappy-bird/game.ts',
  // entry: './src/games/snake/game.ts',
  // entry: './src/games/space-invaders/game.ts',
  // entry: './src/games/super-mario-land/game.ts',
  // entry: './src/games/tank/game.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: '/dist/',
    host: '127.0.0.1',
    port: 8080,
    open: false
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  },
  plugins: [
    // new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(false)
    })
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // })
  ]
};
