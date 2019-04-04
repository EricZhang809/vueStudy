##Vue.js
	中文官网地址：https://cn.vuejs.org/
##是什么
	框架比库大
	渐进式JavaScript框架
	HTML + CSS + JavaScript + 浏览器
	渐进式：
		vue及其生态系统为开发者提供的功能很全面，
		当我们使用vue的时候，我们可以把它当jquery使用，
		dom操作，也可以将vue全家桶当作react使用，
		可以做视图渲染+路由跳转+状态管理    来开发中大型项目，
		
		一句话：
			vue主张最少，利于与其他库或者框架配合使用
			来开发中大型项目，就叫渐进式
	作者：
		中国人尤雨溪
		英文名		Evan You
##为什么目前很火
	目前前端的三大主流框架
	
	angular		Google的后台程序员开发并维护
		虚拟DOM，组件化
	react		FaceBook的两名前端工作工程师开发并维护
		指令	双向数据绑定
	vue			尤雨溪个人开发并维护
	
	vue = react精华 + angular精华
	
	vue特点：
		简单易学
		灵活（vue全家桶 = vuejs + vue-router + vuex）
		高效（超快的虚拟DOM）
##核心思想
	1.数据驱动
		数据驱动视图
		
		启发：
			vue开发项目，对于我们开发者来说 主要关注点在于数据层
		解放了dom操作，		vue很不提倡dom操作
	2.组件化

##使用
	1.下载	得有vuejs框架
		（1）.cdn
		（2）.源码下载到本地
		（3）.npm/cnpm
	2.将vuejs引入到html文件中
	
	3.使用
		当我们把vue框架引入后，框架会暴露一个名字叫Vue的构造函数，
		接下来就可以使用Vue这个构造函数来做事了
		<div id = "box">
			{{key}}
			{{key2}}
		</div>
		new Vue({
			el:'selector',//推荐传ID，不能传body或html标签，
			data:{
				key:value,
				key2:value2
			}
		})
		
	{{key}}：插值符号
		1.放属性名
		2.放表达式		算术运算，三目运算
		3.可以调用方法
		注意：千万不能放语句块（定义变量,if语句,for,function）,不能在标签的属性出现
		
##指令	directive
	概念:	在vue中，指令都是以v-开头，
				指令是直接在标签的身上使用的，也就是指令扩展了标签的功能
	v-bind:属性名=‘key’						绑定属性的
				可以简写，直接使用   :  来代替v-bind:		能简写的就简写
				
	v-on:事件名='函数'						添加事件
				简写@事件名	事件名不加on
				支持传参数		最后一个参数是事件对象参数使用时需要传个实参$event(多个参数时需要在最后传个$event)
		//$mount挂载的意思也可以指定选择区域,不过使用较少
		//v-show 和v-if需要配合data 里面的isVisible:			来确定模块是否显示,传的值是布尔值,可以是其他的会进行隐式转换
		// v-show 和v-if给人的视觉效果是一样的,看上去都是让元素显示和隐藏,
		// v-show是通过控制元素的display属性实现显示和隐藏的
		// v-if是通过移除和插入dom元素实现元素的条件渲染
		// 条件渲染： 是否在文档中
			//	条件成立	在文档中
			//	条件不成立 不在文档中
			
		// v-if v-else-if 后面可以写个表达式
		// v-else	后面不写表达式
		
		// v-for 用来做列表渲染的
		//	可以遍历数组,对象,字符串,数字
##事件修饰符
	prevent		阻止默认行为
	stop			阻止冒泡
	@click.stop.prevent = '函数';
	self			事件作用在自己身上才会触发（事件源在自身上才会触发）