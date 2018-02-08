/*
* @Author: eleven
* @Date:   2017-11-07 10:46:00
* @Last Modified by:   eleven
* @Last Modified time: 2018-02-08 19:05:39
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
        	test: /\.scss$/,
        	use: [
        		'style-loader',
	        	'css-loader',
	        	{
	        		loader: 'postcss-loader',
	        		options: {
			        	sourceMap: 'inline'
			        }
	        	},
	        	'sass-loader'
        	]
        }, {
	        test: /\.styl$/,
	        use: [
	        	'style-loader',
	        	'css-loader',
	        	{
	        		loader: 'postcss-loader',
	        		options: {
			        	sourceMap: 'inline'
			        }
	        	},
	        	'stylus-loader'
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
