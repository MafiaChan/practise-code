<template>
    <div>
        <h2>练习5_选择喜欢的【基础】</h2>
        <h2>请选择你喜欢的专栏</h2>
        <span v-for="(item,index) in arr" :key="index">
			<input type="checkbox" v-model="choose" :value="item"> {{ item }}
		</span>
        <ul>
            <li v-for="(item,index) in choose" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "practise-code-05",
    data() {
        return {
            arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
            choose: []
        }
    }
}
</script>

<style scoped>

</style>