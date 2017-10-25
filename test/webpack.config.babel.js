/**
 * 配置文件
 */
import webpack from 'webpack';
import path    from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: {
		test: path.resolve(__dirname, './index.js')
	},

	output: {
		filename: '[name].bundle.js',
		path    : path.resolve(__dirname)
	},

	resolve: {
		extensions: ['.js'],
		modules   : ['node_modules']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve('node_modules'),
				use: [
					{loader: 'babel-loader'}
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './tp.html')
		})
	]
};