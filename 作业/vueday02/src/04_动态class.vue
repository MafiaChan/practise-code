<template>
    <div>
        <!-- 语法:
		:class="{类名: 布尔值}"
		使用场景: vue变量控制标签是否应该有类名
		-->
        <p :class="{red:true}">动态class</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // res: true
        }
    }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>
