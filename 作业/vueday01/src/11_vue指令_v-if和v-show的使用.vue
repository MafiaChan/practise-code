<template>
	<div>
		<!-- v-show 或者 v-if
			v-show="vue变量"
			v-if="vue变量"
		-->
		<h1 v-show="isShow">我是h1</h1>
		<h2 v-if="isOk">我是h2</h2>
		<!--
			v-show隐藏: 采用display:none   // 频繁切换
			v-if隐藏:   采用从DOM树直接移除 // 移除
		-->

		<!-- v-if和v-else使用 -->
		<input type="text" v-model="age">
		<p v-if="age>18">成年了</p>
		<p v-else>未成年</p>

		<!-- v-if和v-else和v-elseif使用 -->
		<h3>时间表</h3>
		<p v-if="age<5">幼儿园</p>
		<p v-else-if="age<12">小学</p>
		<p v-else-if="age<16">初中</p>
		<p v-else-if="age<18">高中</p>
		<p v-else-if="age<22">大学</p>
		<p v-else>摆烂</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: true,
			isOk: false,
			age: '',
		}
	},
}
</script>

<style></style>
