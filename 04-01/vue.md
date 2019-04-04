###内置组件

keep-alive
component


transition
transition-group
共性：
	而是则都是vue的内置组件，用于给元素或组件添加动画的，
	动画的实现方式借助的都是CSS3动画，
	支持transition（过度动画）
	和animation（帧动画/自定义动画）两种动画
	
区别：
	transition作用单个元素或单个组件，
	transition-group作用域多个元素或者多个组件
	
用法：
	以transition组件为例，transition-group用法与transition一致
```
1.用transition组件包裹要添加动画的元素或组件，同时取个名字
<transition name=''>
	<标签></标签>
	or
	<组件名></组件名>
</transition>

2.写动画样式
动画分为两个阶段，六个状态
	进入阶段和离开阶段
	
	进入三个状态
	
	离开三个状态
```
slot
	插槽，扩展组件的结构
	
	当组件在定义的时候无法确定DOM结构
	需要在调用的时候由开发者指定什么结构
	就渲染什么结构
	这时候就可以给组件添加插槽（slot组件）
	
	那么slot就会被调用组件时，传入的DOM结构
	所替换
	
	默认情况下slot会匹配所有传入的结构（也就是组件中的标签）
	代码大致如下
```
	<child>
		<div class='aaa'></div>
		<div class='bbb'></div>
	<child>
	
	//vue中template的结构
	<div>
		<slot></slot>
	</div>
```	
	
	当我么你只想匹配莫一块结构的时候，
	就可以给slot添加name属性，也叫剧名slot，
	代码大致如下
```
	<child>
		<div class='aaa' slot='aaa'></div>
		<div class='bbb' slot='bbb'></div>
	<child>
	
	//vue中template的结构
	<div>
		<slot name='aaa'></slot>
		<slot name='bbb'></slot>
	</div>
```	
vuejs + vueRouter+vuex = vue全家桶
Reactjs + ReactRouterDOM + Redux = React全家桶
###路由(vue-router)
1.简介
	学习vue的路由，就是学习vue核心库之一的vue-router
	
2.什么叫前端路由
	根据不同的锚点值(hash值)显示不同的组件

3.为什么要有路由
	做项目不可能只有一个页面，肯定是很多个页面通过不同的地址进行切换的，
	路由就是串联页面的一个载体(中间人)，从而实现中大型项目中页面之间的跳转

4.使用
	下载vue-router库
	
```
	<body>
		<div id='goudan'>
			不推荐使用
			<a href='#/aaa'>aaa</a>
			<a href='#/aaa'>aaa</a>
			
			
			推荐使用
			<router-link to='aaa'>aaa</router-link>
			<router-link to='bbb'>aaa</router-link>
			<router-link to='bbb'>aaa</router-link>
			<!--路由的落地容器 路由的渲染器-->
			<router-view></router-view>
		</div>
	</body>
	<script src="../vue.js"></script>
	<script type="text/javascript" src="../vue-router.js"></script>
	<script type="text/javascript">
		const Aaa = {
			template:`<div>Aaa</div>`
		};
		const Bbb = {
			template:`<div>Bbb</div>`
		}
		const Ccc = {
			template:`<div>Ccc</div>`
		}
		//1.定义路由规则(数组)
		const routes=[
			{
				path:'/aaa',
				component:Aaa
			},
			{
				path:'/bbb',
				component:Bbb
			},
			{
				path:'/ccc',
				component:Ccc
			}
		];
		//2.创建路由对象
		let router = new VueRouter({
			routes
		})
		console.log(router)
		//3.挂载到vue身上
		new Vue({
			el:'#goudan',
			router
		})
		//4.指明路由的渲染容器
```
