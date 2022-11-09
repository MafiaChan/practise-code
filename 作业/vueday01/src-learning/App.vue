<template>
	<div>
		<!--插值表达式-->
		<h1>这是标题</h1>
		<h2>{{ msg }}</h2>
		<h3>{{ obj.name }},{{ obj.age > 18 ? '成年' : '未成年' }}</h3>
		<p>{{ obj.name + '小春春' }}{{ obj.age }}岁</p>
		<!--动态属性-->
		<a :href="url" target="_blank">VUE</a>
		<img :src="imgUrl" alt="">
		<!--标签绑定事件-->
		<p>春春的年龄：{{ obj.age }}</p>
		<button v-on:click="obj.age++">+1</button>
		<button v-on:click="clickFn">+1</button>
		<button @click="addFn(10)">+10</button>
		<button @click="subFn">-1</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '这是h2',
			obj: {
				name: 'cxc',
				age: 1
			},
			url: 'https://cn.vuejs.org/',
			imgUrl: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/02/ChMkJlbKxauIJhjqAAkRBe2oT4gAALHZQN7IMQACREd082.jpg',
		}
	},
	methods: {
		clickFn() {
			this.obj.age++
		},
		addFn(num) {
			this.obj.age += num
		},
		subFn() {
			this.obj.age--
		}
	}
}
</script>

<style scoped lang="less">
body {
	div {
		font-size: 30px;
		color: aquamarine;
	}

	a {
		text-decoration: none;
		color: aquamarine;
	}

	img {
		width: 300px;
		height: 200px;
	}
}
</style>