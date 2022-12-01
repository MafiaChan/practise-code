<template>
    <ul class="todo-list">
        <!-- completed: 完成的类名 -->
        <li
                :class="{completed:item.done}"
                v-for="item in showList"
                :key="item.id"
        >
            <div class="view">
                <!--在vuex中不能直接用v-model来修改属性-->
                <input
                        class="toggle"
                        type="checkbox"
                        :checked="item.done"
                        @change="changeDone(item.id)"
                />
                <label>{{ item.name }}</label>
                <button class="destroy" @click="delList(item.id)"></button>
            </div>
        </li>
    </ul>

</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex"

export default {
    computed: {
        ...mapState('todos',['list']),
        ...mapGetters('todos',['showList'])
    },
    methods: {
        ...mapMutations('todos',['changeDone', 'delList']),
        // changeFn(id) {
        //     this.$store.commit('changeDone', id)
        //     this.changeDone(id)
        // }
    },
    watch:{
        list:{
            deep:true,
            handler(){
                localStorage.setItem('vuex-todoList',JSON.stringify(this.list))
            }
        }
    }
}
</script>
