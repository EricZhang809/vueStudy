const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	watch:true,
	mode:'development',
	entry:'./main.js',
	output:{
		filename:'build.js',
		path:path.resolve('dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/i,//处理以.css结尾的
				use:['style-loader','css-loader'] //用什么来处理它
			},
			{
				test:/\.(png|jpg|jpeg)$/i,
				use:{
					loader:'url-loader',
					options:{
						limit:10000
					}
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.html'
		})
	]
}