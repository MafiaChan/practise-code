<template>
    <div>
        <p>num的值：{{ num }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 10,
            b: 20
        }
    },
    // 计算属性:
    /*
	场景: 一个变量的值, 需要用另外变量计算而得来

	语法:
		computed: {
		计算属性名 () {
			return 值
		}
		}

	注意: 计算属性和data属性都是变量-不能重名
	注意2: 函数内变量变化, 会自动重新计算结果返回
*/
    computed: {
        //!函数形式，当属性用
        num() {
            return this.a + this.b
        }
    }
}
</script>

<style>

</style>
