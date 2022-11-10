<template>
    <div>
        <input type="text" v-model="name">
    </div>
</template>

<script>
// 目标: 侦听到name值的改变
export default {
    data() {
        return {
            name: ""
        }
    },
    /*
	语法:
		watch: {
		变量名 (newVal, oldVal){
			// 变量名对应值改变这里自动触发
		}
		}
*/
    watch: {
        name(newName, oldName) {
            console.log(newName, oldName)
        }
    }
}
</script>

<style>

</style>
