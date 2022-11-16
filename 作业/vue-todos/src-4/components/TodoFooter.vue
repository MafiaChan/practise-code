<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ amount }}</strong>个</span>
        <ul class="filters">
            <li>
                <a :class="{selected:selectType==='all'}" href="javascript:;" @click="changeType('all')">全部</a>
            </li>
            <li>
                <a :class="{selected:selectType==='undo'}" href="javascript:;" @click="changeType('undo')">未完成</a>
            </li>
            <li>
                <a :class="{selected:selectType==='done'}" href="javascript:;" @click="changeType('done')">已完成</a>
            </li>
        </ul>
        <button class="clear-completed" v-show="showList" @click="clearList">清除已完成</button>
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
        amount() {
            return this.list.length
        },
        showList() {
            return this.list.some(item => item.isDone)
        }
    },
    methods: {
        clearList() {
            this.$emit('clearList')
        },
        changeType(type) {
            this.selectType = type
            this.$emit('changeType', type)
        }
    }
}
</script>
