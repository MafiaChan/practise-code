<template>
    <div>
        <span>全选:</span>
        <input type="checkbox" v-model="allSelect"/>
        <button @click="noSelect">反选</button>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <input type="checkbox" v-model="item.c"/>
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
// 目标: 小选框 -> 全选
export default {
    data() {
        return {
            arr: [{
                name: "猪八戒",
                c: false,
            },
                {
                    name: "孙悟空",
                    c: false,
                },
                {
                    name: "唐僧",
                    c: false,
                },
                {
                    name: "白龙马",
                    c: false,
                },
            ],
        };
    },
    computed: {
        allSelect: {
            get() {
                return this.arr.every(item => item.c === true)
            },
            set(val) {
                this.arr.forEach(item => item.c = val)
            }
        },
    },
    methods: {
        noSelect() {
            this.arr.forEach(item => item.c = !item.c)
        }
    }
};
</script>

<style>
</style>
