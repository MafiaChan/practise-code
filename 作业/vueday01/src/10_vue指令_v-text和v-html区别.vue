<template>
	<div>
		<h1>演示：v-text和v-html区别</h1>

		<p v-text="str"></p>
		<p v-html="str"></p>

		<!-- 注意: v-text或v-html会覆盖插值表达式 -->
		<p v-text="str">{{ 10 + 20 }}</p>

		<!--{{}}不会覆盖内容-->
		<p>{{ str }} 不会被覆盖的内容</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			str: '<em>我是一个em</em>',
		}
	},
}
</script>

<style>
em {
	color: #0094ff;
}
</style>
