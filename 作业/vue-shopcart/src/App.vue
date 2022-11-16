<template>
    <div class="main">
        <MyHeader></MyHeader>
        <MyGoods v-for="item in list" :key="item.goods_id" :item="item"></MyGoods>
        <MyFooter :list="list"></MyFooter>
    </div>
</template>

<script>
import axios from "axios"
// 获取-购物车列表接口  GET  https://applet-base-api-t.itheima.net/api/cart
import MyHeader from "@/components/MyHeader"
import MyGoods from "@/components/MyGoods"
import MyFooter from "@/components/MyFooter"
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    data() {
        return {
            list: [] // 商品所有数据
        }
    },
    methods: {
        async getList() {
            const {data: res} = await axios.get('https://applet-base-api-t.itheima.net/api/cart')
            this.list = res.list
        }
    },
    components: {
        MyHeader,
        MyGoods,
        MyFooter
    },
    created() {
        this.getList()
    }
}
</script>

<style scoped>
.main {
    padding-top: 45px;
    padding-bottom: 50px;
}
</style>
