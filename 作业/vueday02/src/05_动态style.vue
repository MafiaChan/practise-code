<template>
    <div>
        <!-- 动态style语法
		:style="{css属性名: 值}"
		-->
        <p :style="{background:colorStr}">动态style</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorStr: 'lime'
        }
    }
}
</script>

<style>

</style>
