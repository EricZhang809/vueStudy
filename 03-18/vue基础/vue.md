##Vue.js  
 	中文官网地址: https://cn.vuejs.org/
##是什么
	框架 > 库(jquery)
	渐进式JavaScript前端框架
		HTML+CSS+JavaScript+浏览器 

	渐进式: 
		vue及其生态系统为开发者提供的功能很全面,
		当我们使用vue的时候,我们可以把它当jquery使用,
		dom操作,也可以将vue全家桶当做Reactjs使用,
		视图渲染+路由跳转+状态管理 来开发中大型项目,

		一句话: 
			vue主张最少,利于与其它库或者框架配合使用,
			来开发中大型项目,就叫渐进式 
	作者: 
		中国江苏人  尤雨溪    
		英文名 Evan You     尤小右 


##为什么目前很火	
	目前前端的三大主流框架 


	angular    Google的后台工程师开发并维护 

    react      Facebook的两名前端工程师开发并维护 

	vue       尤雨溪个人开发并维护 


	vue = react精华(虚拟DOM,组件化) + angular精华(指令，双向数据绑定）

	vue特点: 
		1.简单易学
		2.灵活(vue全家桶 = vuejs + vue-router + vuex)
		3.高效(超快的虚拟DOM)



##核心思想
	1.数据驱动
		数据驱动视图

		启发: 
			vue开发项目,对于我们开发者来说 主要关注点在于数据层

		解放了dom操作  --> vue很不提倡dom操作 




	2.组件化





##使用
	1.下载  得有vuejs框架 
		(1).cdn
		(2).源码下载到本地
		(3).npm/cnpm 
	2.将vuejs引入到html文件
	<script src='node_modules/vue/dist/vue.js'></script>

	3.使用
		当我们把vue框架引入之后,框架会暴露
		一个名字叫Vue的构造函数,
		接下来就可以使用Vue构造函数来做事了


		<div id="box">
			<p>{{key}}</p>
			<p>{{key2}}</p>
			<p>{{key3}}</p>
		</div>	


		new Vue({
			el: '#box',// 推荐传id,不能传body或html标签
			data: {
				key:  value,
				key2: value2,
				key3: value3
			}
		})


	{{ xxx }}: 插值符号 
		1.属性名   
		2.表达式   算术运算，三目运算 
		3.调用方法


		注意: 不能放语句块(定义变量、if、for、function(){}),
		不能出现标签的属性中 例如title='{{a}}'


##指令  directive

	概念: 
		在vue中,指令都是以v-开头,
		指令是直接在标签身上使用的,
		也就是指令扩展了标签的功能

	v-bind:属性名='数据'                绑定属性  
	简写:      :属性名='数据'  能简写的就简写

	v-on:事件名='函数' 
		简写: @事件名='函数' 

		注意: 事件名不带on   v-on:mouseenter='fn'
	支持传参数


	
















