<template>
    <header class="header">
        <h1>todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allSelect">
        <label for="toggle-all"></label>
        <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus v-model.trim="content"
               @keyup.enter="addList"/>
    </header>
</template>

<script>
export default {
    props: ['list'],
    data() {
        return {
            content: ''
        }
    },
    methods: {
        addList() {
            if (this.content.length === 0) {
                return alert('无内容')
            }
            this.$emit('addList', this.content)
            this.content = ''
        }
    },
    computed: {
        allSelect: {
            get() {
                return this.list.every(item => item.isDone)
            },
            set(val) {
                this.list.forEach(item => item.isDone = val)
            }
        }
    }
}
</script>
