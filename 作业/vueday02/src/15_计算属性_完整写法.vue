<template>
    <div>
        <div>
            <span>姓名:</span>
            <input type="text" v-model="full">
        </div>
    </div>
</template>

<script>
// 目标：给计算属性赋值 - 需要setter
/*
	完整语法:
	computed: {
			"计算属性名" (){},
			"计算属性名": {
					set(值){

					},
					get(){
							return 值
					}
			}
	}
*/
export default {
    computed: {
        full: {
            get() {
                return '123'
            },
            set(val) {
                console.log(val)
            },
        }
    }
}
</script>

<style>

</style>
