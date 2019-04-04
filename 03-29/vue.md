##内置组件
	keep-alive
		当一个组件频繁的被创建或销毁，这样是很耗费计算机性能的，
		因为需要创建节点或者移除节点，为了避免这种消耗性能的操作，
		我们可以用vue中的内置组件keep-alive包裹该组件，这样不会
		让该组件被频繁的创建或者销毁，而让该组件一直保持活着的状态
		，只是出局激活和停用的状态，组件一旦被keep-alive包裹了，
		就不再触发beforeDestroy和destroyed钩子了，而会触发activated
		和deactivated这两个钩子
		
		activated：			组件激活时触发
		deactivated：		组件停用时触发
		
	component:
		用来盛放动态组件
		通过is属性切换组件
		
		使用
			<component is='组件名'></component>
			
	transition name ='xxx'
		两个阶段（进入、离开）
		
		六个状态（6个class）
			进入时		.xxx-enter		{进入动画师的初始样式}
			进入中		.xxx-enter-active{适合做过渡}
			进入结束		.xxx-enter-to	{进入动画结束时的样式}
			
			离开时		.xxx-leave
			离开中		.xxx-leave-active
			离开结束		.xxx-leave-to