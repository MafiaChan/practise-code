export default {
    namespaced: true,
    state: {
        type: 'all',
        list: JSON.parse(localStorage.getItem('vuex-todoList')) || []
    },
    mutations: {
        changeDone(state, id) {
            //根据id找到需要被修改的对象 ==> 再取反done
            const obj = state.list.find(item => item.id === id)
            obj.done = !obj.done
        },
        delList(state, id) {
            state.list = state.list.filter(item => item.id !== id)
        },
        addList(state, content) {
            state.list.push({
                id: +new Date(),
                name: content,
                done: false
            })
        },
        changeAll(state, val) {
            state.list.forEach(item => item.done = val)
        },
        // 提供删除已完成的功能函数
        clearDone(state) {
            // 过滤出未完成的isDone为false
            state.list = state.list.filter(item => !item.done)
        },
        // 修改类型type
        changeType(state, val) {
            console.log(val);
            state.type = val
        }
    },
    getters: {
        // 统计未完成数量
        leftCount(state) {
            return state.list.filter(item => !item.done).length
        },
        // 清除按钮是否显示,是否有任务已完成
        showClear(state) {
            return state.list.some(item => item.done)
        },
        showList(state) {
            if (state.type === 'active') {
                return state.list.filter(item => !item.done)
            } else if (state.type === 'complete') {
                return state.list.filter(item => item.done)
            } else {
                return state.list
            }
        }
    },
    // 异步操作
    actions: {
        clearDoneAsync(context) {
            setTimeout(() => {
                context.commit('clearDone')  //clearDone与52行
            }, 1000);
        }
    },
}