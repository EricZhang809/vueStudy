const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./main.js',
	output:{
		path:path.resolve(_dirname,'dist'),
		filename:'build.js'
	},
	watch:true,
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html'
		})
	],
	module:{
		rules:[
			{
				use:[]
			}
		]
	}
}