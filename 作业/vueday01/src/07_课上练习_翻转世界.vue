<template>
	<div>
		<h1>{{ msg }}</h1>

		<button @click="btn">逆转世界</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello, World',
		}
	},
	methods: {
		btn() {
			//*翻转数组
			// this.msg = this.msg.split('').reverse().join('')
			//*拓展做法
			this.msg = [...this.msg].reverse().join('')
		},
	},
}
</script>

<style></style>
