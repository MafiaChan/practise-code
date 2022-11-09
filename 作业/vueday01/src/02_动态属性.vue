<template>
	<div>
		<!-- 语法: v-bind:属性名="vue变量" -->
		<a v-bind:href="url">点击去百度</a>

		<!-- 语法: :属性名="vue变量" -->
		<img :src="imgUrl"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			url: 'http://www.baidu.com',
			imgUrl: "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
		}
	}
}
</script>

<style>

</style>
