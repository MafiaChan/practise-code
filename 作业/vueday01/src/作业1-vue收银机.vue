<template>
	<div>
		<table border="1">
			<caption>欢迎光临_vue开发的收银系统_水果店</caption>
			<tr>
				<td><b>苹果 10￥/斤，折扣~8折~</b></td>
			</tr>
			<tr>
				<td>请输入你要购买的斤数
					<input type="text" v-model.number="num">
				</td>
			</tr>
			<tr>
				<td>
					<button @click="bill">结账买单~</button>
				</td>
			</tr>
			<tr>
				<td v-if="total&&discount&&sub">
					结账单：单价
					<span>{{ total }}</span>
					￥元 折后价：
					<span>{{ discount }}</span>
					￥元 省了：
					<span>{{ sub }}</span>
					￥元
				</td>
				<td v-else>你啥都没买呀</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "作业1-vue收银机",
	data() {
		return {
			price: 10,
			num: '',
			total: '',
			discount: '',
			sub: ''
		}
	},
	methods: {
		bill() {
			this.total = this.num * this.price
			this.discount = this.num * this.price * .8
			this.sub = this.num * this.price - this.num * this.price * .8
		}
	}
}
</script>

<style scoped>
td {
	height: 30px;
	width: 600px;
	text-align: center;
}
</style>