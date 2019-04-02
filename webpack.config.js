let webpack = require('webpack');
let path = require('path');

module.exports = {
	devtool: '',
	entry: ['./src/index.js'],
	output: {
		filename: '[name].min.js',
		path: '/srv/www/marvel-search-engine/compiled/',
		publicPath: '/',
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.ENV': JSON.stringify('production'),
		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['@babel/env', '@babel/preset-react', {
							plugins: [
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-transform-regenerator',
							],
						}],
						cacheDirectory: true,
					},
				},
			},
		],
	},
};
