/*
* @Author: eleven
* @Date:   2017-11-07 10:46:00
* @Last Modified by:   eleven
* @Last Modified time: 2017-11-09 23:55:19
*/

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'example'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre',
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['env']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css'],
        alias: {}
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        quiet: true,
        overlay: {
            errors: true
        }
    },
    devtool: '#cheap-module-eval-source-map'
}