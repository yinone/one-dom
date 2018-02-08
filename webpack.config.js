/*
* @Author: eleven
* @Date:   2017-11-07 10:46:00
* @Last Modified by:   eleven
* @Last Modified time: 2018-02-09 01:22:25
*/

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const poststylus = require('poststylus')

module.exports = {
    entry: path.resolve(__dirname, 'example'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
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
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
        	test: /\.css$/,
        	use: [
            	'style-loader',
            	'css-loader',
            	'postcss-loader',
            ]
        }, {
        	test: /\.scss$/,
        	use: [
        		'style-loader',
	        	'css-loader',
        		'postcss-loader',
	        	'sass-loader'
        	]
        }]
    },
    resolve: {
    	modules: ['node_modules', 'web_modules', 'bower_components'],
        extensions: ['.js', '.json', '.jsx'],
        alias: {}
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('index.html'),
            inject: true
        }),
        new FriendlyErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
		    options: {
		      stylus: {
		        use: [poststylus([ 'postcss-utilities' ])]
		      }
		    }
		})
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
