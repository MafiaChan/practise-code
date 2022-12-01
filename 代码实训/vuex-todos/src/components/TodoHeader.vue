<template>
    <header class="header">
        <h1>todos</h1>
        <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                v-model="isAll"
        >
        <label for="toggle-all"></label>
        <input
                class="new-todo"
                placeholder="输入任务名称-回车确认"
                autofocus
                v-model.trim="content"
                @keyup.enter="addListFn"
        />
    </header>
</template>

<script>
import {mapMutations, mapState} from "vuex"

export default {
    data() {
        return {
            content: ''
        }
    },
    computed: {
        ...mapState('todos',['list']),
        isAll: {
            get() {
                return this.list.every(item => item.done)
            },
            set(val) {
                this.$store.commit('changeAll', val)
            }
        }
    },
    methods: {
        ...mapMutations('todos',['addList', 'changeAll']),
        addListFn() {
            if (this.content.length === 0) {
                return alert('土豆丝不能为空')
            }
            this.addList(this.content)

            this.content = ''
        }
    }
}
</script>
