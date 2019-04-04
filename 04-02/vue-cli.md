#SPA 单页面应用程序
	Single Page Application

###SPA
	多页面应用程序 	www.taobao.com	www.jd.com
		
	单页面应用程序	www.music.163.com
###SFC
	单文件组件
	
	Single File Component
	
	在开发Vue项目时，每个	.vue文件就是一个单文件组件
	组件 = HTML + CSS + JS
	<template>
		//写组建的HTML结构
	</template>
	
	<script>
		//写组件的行为
	</script>
	
	<style>
		//写组件的样式
	</style>
###自己搭建一个vue开发环境

	工具:Node + Webpack
	
		核心是webpack在工作
	
	webpack ,webpack-cli是webpack的核心库
	
	webpack-dev-server
		会帮我们开启一个服务，整个项目会在node服务器下工作
		当源代码发生改变的时候，页面会自动刷新
		浏览器页面，提高开发效率
		需要配合另一个模块
	html-webpack-plugin
		webpack的一个插件
		
		把index.html页面的复制
		一份放到内存中，然后开始
		自动帮我们注入build.js
		（打包后）文件
		
##项目结构
	vue-project
		/dist		编译后的代码
		/src		源代码
			/components		组件目录
				.vue				组件
					<template></template>
					<style></style>
					<script></script>
					
			/router			放路由
			
			/assets			公共资源
				/css
				/js
				/img
				/fonts
			
			App.vue			整个项目的根组件
			
			main.js			项目的入口文件

			
		/node_modules
		/package.json
		/webpack.config.js
		/index.html