<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ showList }}</strong>个</span>
        <ul class="filters">
            <li>
                <a :class="{selected:selectType==='all'}" @click="changeType('all')" href="javascript:;">全部</a>
            </li>
            <li>
                <a :class="{selected:selectType==='undo'}" @click="changeType('undo')" href="javascript:;">未完成</a>
            </li>
            <li>
                <a :class="{selected:selectType==='done'}" @click="changeType('done')" href="javascript:;">已完成</a>
            </li>
        </ul>
        <button class="clear-completed" @click="clearDone">清除已完成</button>
    </footer>
</template>

<script>
export default {
    props: ['list'],
    data() {
        return {
            selectType: 'all'
        }
    },
    computed: {
        showList() {
            return this.list.length
        }
    },
    methods: {
        clearDone() {
            this.$emit('clearDone')
        },
        changeType(type) {
            this.selectType = type
            this.$emit('changeType', type)
        }
    }

}
</script>
