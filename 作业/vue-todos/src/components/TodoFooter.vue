<template>
    <footer class="footer">
        <span class="todo-count">剩余<strong>{{ amount }}</strong>个</span>
        <ul class="filters">
            <li>
                <a
                        :class="{selected:selectType==='all'}"
                        href="javascript:;"
                        @click="changeType('all')"

                >全部
                </a>
            </li>
            <li>
                <a
                        :class="{selected:selectType==='undo'}"
                        href="javascript:;"
                        @click="changeType('undo')"
                >未完成
                </a>
            </li>
            <li>
                <a
                        :class="{selected:selectType==='done'}"
                        href="javascript:;"
                        @click="changeType('done')"
                >已完成
                </a>
            </li>
        </ul>
        <button
                class="clear-completed"
                v-show="showClear"
                @click="clearDone"
        >清除已完成
        </button>
    </footer>
</template>

<script>
export default {
    props: ['amount', 'list'],
    data() {
        return {
            selectType: 'all'
        }
    },
    computed: {
        showClear() {
            return this.list.some(item => item.isDone)
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
