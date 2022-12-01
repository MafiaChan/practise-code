<template>
    <section class="todoapp">
        <todo-header></todo-header>
        <todo-main></todo-main>
        <todo-footer></todo-footer>
    </section>
</template>

<script>
import TodoHeader from "@/components/TodoHeader"
import TodoMain from "@/components/TodoMain"
import TodoFooter from "@/components/TodoFooter"
import '@/styles/base.css'
import '@/styles/index.css'
// 样式引入 + 导入组件并注册使用
export default {
    data() {
        return {};
    },
    components: {
        TodoHeader,
        TodoMain,
        TodoFooter
    }
};
</script>
