<template>
	<div>
		<h1>1. 事件触发, 无传值, 可以直接获取事件对象</h1>
		<a @click="one" href="http://www.baidu.com">百度</a>
		<hr/>

		<h1>2. 事件触发, 有传值, 需要手动传入$event</h1>
		<a @click="two(100,$event)" href="http://www.taobao.com">淘宝</a>
	</div>
</template>

<script>
export default {
	methods: {
		one(e) {
			e.preventDefault()
		},
		two(e, $event) {
			console.log(e)
			$event.preventDefault()
		}
	}
};
</script>

<style>
</style>
