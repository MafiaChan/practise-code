<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <li v-for="item in list" :key="item.id" :class="{completed:item.isDone}">
            <div class="view">
                <input class="toggle" type="checkbox" v-model="item.isDone"/>
                <label>{{ item.name }}</label>
                <button class="destroy" @click="delList(item.id)"></button>
            </div>
        </li>
    </ul>

</template>

<script>
export default {
    props: ['list'],
    methods: {
        delList(id) {
            this.$emit('delList', id)
        }
    }
}
</script>
