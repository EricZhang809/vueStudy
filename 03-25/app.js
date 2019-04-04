(function (Vue) {
	'use strict';// 开始严格模式  
	let vm = new Vue({
		el: '#todoapp',
		data: {
			todos: JSON.parse(window.localStorage.getItem('todos')) || [],
			// 选择的类型 是all还是active还是completed
			type: 'all',

			// 记录双击的todo  默认谁都不指向  
			currentToDo: null
		},

		// 自定义局部指令 
		directives: {
			focus(el,binding) {
				console.log(el,binding);
				// modifiers: {}  // 修饰符 
				// name: "focus"  // 指令名
				// rawName: "v-focus" // 原始指令名
				// expression:   'currentToDo===todo'   表达式
				// value: false   表达式的运算结果 
				/*
					el: 指令绑定的原生的DOM元素 
					binding: 与指令绑定的东西
					modifier 
					name
					rawName
					value
					expression  
				*/
				if(binding.value) {
					el.focus();
				}
			}
		},
		computed: {
			// 计算所有todo是否都完成 
			isAllToDoCompleted() {
				return this.todos.every(todo => todo.completed);
			},
			// 计算未完成的todo
			unCompletedToDo() {
				return this.todos.filter(todo => !todo.completed);
			},
			// 计算是否有完成的todo
			hasCompletedToDo() {
				return this.todos.some(todo => todo.completed);
			},
			// 根据type类型过滤出对应数据 
			filteredToDo() {
				switch(this.type) {
					case 'all':
						return this.todos;
					case 'active':
						return this.todos.filter(todo => !todo.completed);
					case 'completed':
						return this.todos.filter(todo => todo.completed);
				}
			}
		},
		methods: {
			// 添加todo
			addToDo(ev) {
				// 1.获取input框的值 
				let title = ev.target.value.trim();
				// 2.tilte是否为空
				if(title) {
					// 2.1 不为空push到todos
					this.todos.push({
						id: Date.now(),
						title,
						completed: false
					});
					// 3.清空input
					ev.target.value = '';
				}
			},
			// 删除todo
			removeToDo(index) {
				this.todos.splice(index,1);
			},
			// 全选和全不选
			toggleAll(ev) {
				this.todos.forEach(todo => todo.completed = ev.target.checked);
			},
			// 删除所有完成的todo
			removeAllCompletedToDo() {
				this.todos = this.todos.filter(todo => !todo.completed);
			},
			// // 选择切换类型
			// selectType(type) {
			// 	this.type = type;
			// }

			// 双击哪个li让哪个li进入编辑状态 
			edit(todo) {
				this.currentToDo = todo;
			},

			// 具体的编辑操作 
			editToDo(todo,index,ev) {
				let title = ev.target.value.trim()
				// 1.没有值
				if(!title){
				   return this.todos.splice(index,1);
				}
				// 2.有值
				// 修改当前todo的title属性
				todo.title = title;
				// 退出编辑
				this.exitEdit();
			},
			// 退出编辑
			exitEdit() {
				this.currentToDo = null;
			}
		},
		watch: {
			todos: {
				deep: true,
				handler(newVal) {
					window.localStorage.setItem('todos',JSON.stringify(newVal))
				}
			}

		}
	});

	/*
		todos一变, 就需要重新存一次 

	*/
	// hashchange 事件   哈希改变就会触发hashchange事件 
	window.addEventListener('hashchange',function() {
		vm.type = window.location.hash.slice(2) || 'all';
	})







})(Vue);
