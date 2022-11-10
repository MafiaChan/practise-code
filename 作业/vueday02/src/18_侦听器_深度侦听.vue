<template>
    <div>
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.age">
    </div>
</template>

<script>
// 目标: 侦听对象
export default {
    data() {
        return {
            user: {
                name: "",
                age: 0
            }
        }
    },

    /*
语法:
	watch: {
		变量名 (newVal, oldVal){
			// 变量名对应值改变这里自动触发
		},

		变量名: {
			handler(newVal, oldVal){},
			deep: true, // 深度侦听(对象里面层的值改变)
			immediate: true // 立即侦听(网页打开handler执行一次)
		}
	}
*/
    watch: {
        name: {
            handler(newName, oldName) {
                console.log(newName, oldName)
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style>

</style>
