const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	context: path.resolve(__dirname, './src'),
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
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
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
	plugins: [
		new MiniCssExtractPlugin({
            filename: "./style.css"
        }),
		new CopyWebpackPlugin([
			{ from: '../images/portfolioimages', to: '../public/images/portfolioimages', type: 'dir' }
		])
	],
	watch: true
};
