const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");

module.exports = {
	context: path.resolve(__dirname, './src'),
	devtool: false,
	entry: {
		app: './index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		port: 3333,
		contentBase: 'public'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				'babel-loader'
			]
		},
		{
			test: /\.less$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: MiniCssExtractPlugin.loader },
				{ loader: 'css-loader' },
				{ loader: 'less-loader' }
			]
		},
		{
			test: /\.(eot|png|jpg|jpeg|gif|woff|woff2|svg|ttf)$/,
			exclude: /node_modules/,
			use: 'url-loader?limit=10000'
		}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					mangle: true,
					warnings: false,
					screw_ie8: true,
					compress: {
						pure_getters: true,
						unsafe: true,
						unsafe_comps: true,
						conditionals: true,
						unused: true,
						comparisons: true,
						sequences: true,
						dead_code: true,
						evaluate: true,
						if_return: true,
						join_vars: true
					},
					output: {
						comments: false,
					}
				},
				exclude: [/\.min\.js$/gi] // skip pre-minified libs
			})
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new MiniCssExtractPlugin({
			filename: "./style.css"
		}),
		new webpack.IgnorePlugin({
			resourceRegExp: /^\.\/locale$/,
			contextRegExp: /moment$/
		})
	],
	watch: false
};
