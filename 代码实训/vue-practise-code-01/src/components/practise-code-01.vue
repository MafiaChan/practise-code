<template>
    <div>
        <h2>练习1_帅哥美女走一走【基础】</h2>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{ item }}
            </li>
        </ul>
        <button @click="isDown">禅让制</button>
    </div>
</template>

<script>
export default {
    name: "practise-code-01",
    data() {
        return {
            list: ['老大', '老二', '老三']
        }
    },
    methods: {
        isDown() {
            this.list.push(this.list[0])
            this.list.shift()
        }
    }
}
</script>

<style scoped>

</style>