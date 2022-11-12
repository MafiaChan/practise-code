<template>
    <div>
        <h2>练习2_加加减减【基础】</h2>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item }}
                <button @click="isDel(index)">删除</button>
            </li>
        </ul>
        <button @click="isAdd">生成</button>
    </div>
</template>

<script>
export default {
    name: "practise-code-02",
    data() {
        return {
            list: [3, 5, 7, 8, 4]
        }
    },
    methods: {
        isAdd() {
            this.list.push(Math.round(Math.random() * 10))
        },
        isDel(index) {
            this.list.splice(index, 1)
        }
    }
}
</script>

<style scoped>

</style>