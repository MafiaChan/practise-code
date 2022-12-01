import Vue from 'vue'
import Vuex from 'vuex'
import todos from "@/store/modules/todos"

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV === 'development',
    modules: {
        todos
    }
})

export default store
