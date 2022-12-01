<template>
    <footer class="footer">
    <span class="todo-count"
    >剩余
        <!-- <strong>{{ $store.getters.leftCount }}</strong> -->
      <strong>{{ leftCount }}</strong>
    </span>
        <ul class="filters">
            <li>
                <a
                        @click="changeType('all')"
                        :class="{ selected: type === 'all' }"
                        href="javascript:;"
                >
                    全部
                </a>
            </li>
            <li>
                <a
                        @click="changeType('active')"
                        :class="{ selected: type === 'active' }"
                        href="javascript:;"
                >
                    未完成
                </a>
            </li>
            <li>
                <a
                        @click="changeType('complete')"
                        :class="{ selected: type === 'complete' }"
                        href="javascript:;"
                >
                    已完成
                </a>
            </li>
        </ul>
        <!-- 当我点击的时候延时1s删除 -->
        <button
                class="clear-completed"
                @click="clearDoneAsync"
                v-show="showClear"
        >
            清除已完成
        </button>
    </footer>
</template>

<script>
import {mapGetters, mapState, mapActions, mapMutations} from "vuex";

export default {
    computed: {
        ...mapState('todos', ["list", "type"]),
        ...mapGetters('todos', ["leftCount", "showClear"]),
        //  leftCount(){
        // 	return this.list.filter((item) => !item.isDone).length
        //  }
    },
    methods: {
        ...mapMutations('todos', ['changeType']),
        ...mapActions('todos', ["clearDoneAsync"]),
    },
}
</script>
