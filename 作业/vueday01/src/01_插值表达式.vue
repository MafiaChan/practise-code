<!-- <vue 根据提示回车即可出现如下结构 -->
<template>
	<div>
		<!-- 使用插值表达式 把数据在页面中使用 -->
		<h1>{{ msg }}</h1>

		<!-- 对象点语法 -->
		<h2>{{ obj.name }}{{ obj.age }}</h2>

		<!-- 三元表达式 -->
		<h3>{{ obj.age > 10 ? '是傻' : '是蠢' }}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '第一条消息',
			obj: {
				name: 'cxc',
				age: 18
			}
		}
	}
}
</script>

<style>

</style>
