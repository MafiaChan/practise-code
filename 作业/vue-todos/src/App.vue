<template>
    <section class="todoapp">
        <todo-header :list="list" @addList="addListFn"></todo-header>
        <todo-main :list="showList" @delList="delListFn"></todo-main>
        <todo-footer :amount="amount" :list="list" @clearDone="clearDoneFn" @changeType="changeTypeFn"></todo-footer>
    </section>
</template>

<script>
import todoHeader from "@/components/TodoHeader"
import todoMain from "@/components/TodoMain"
import todoFooter from "@/components/TodoFooter"
// 样式引入 + 导入组件并注册使用
import './styles/base.css'
import './styles/index.css'

export default {
    data() {
        return {
            type: 'all',
            list: JSON.parse(localStorage.getItem('todoList')) || []
        };
    },
    components: {
        todoHeader,
        todoMain,
        todoFooter
    },
    methods: {
        addListFn(val) {
            this.list.push({
                id: +new Date(),
                name: val,
                isDone: false
            })
        },
        delListFn(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        clearDoneFn() {
            this.list = this.list.filter(item => !item.isDone)
        },
        changeTypeFn(type) {
            this.type = type
        }
    },
    computed: {
        amount() {
            return this.list.length
        },
        showList() {
            if (this.type === 'undo') {
                return this.list.filter(item => !item.isDone)
            } else if (this.type === 'done') {
                return this.list.filter(item => item.isDone)
            } else {
                return this.list
            }
        }
    },
    watch: {
        list: {
            handler() {
                localStorage.setItem('todoList', JSON.stringify(this.list))
            },
            deep: true
        }
    }
};
</script>
