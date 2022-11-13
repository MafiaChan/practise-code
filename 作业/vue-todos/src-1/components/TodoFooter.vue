<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ amount }}</strong>个</span>
        <ul class="filters">
            <li>
                <a
                        href="javascript:"
                        @click="changeType('all')"
                        :class="{selected:selectType==='all'}"
                >
                    全部
                </a>
            </li>
            <li>
                <a
                        href="javascript:"
                        @click="changeType('undo')"
                        :class="{selected:selectType==='undo'}"
                >
                    未完成
                </a>
            </li>
            <li>
                <a
                        href="javascript:"
                        @click="changeType('done')"
                        :class="{selected:selectType==='done'}"
                >
                    已完成
                </a>
            </li>
        </ul>
        <button class="clear-completed" v-show="showClear" @click="delDone">清除已完成</button>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            selectType: 'all'
        }
    },
    props: ['list'],
    computed: {
        amount() {
            return this.list.length
        },
        showClear() {
            return this.list.some(item => item.isDone)
        }
    },
    methods: {
        delDone() {
            this.$emit('delDone')
        },
        changeType(type) {
            this.selectType = type
            this.$emit('changeType', type)
        }
    }
}
</script>
