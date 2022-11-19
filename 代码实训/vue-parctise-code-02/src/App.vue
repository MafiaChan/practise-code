<template>
    <div>
        <student-info></student-info>
        <hr>
        <hr>
        <manger-goods></manger-goods>
        <hr>
        <hr>
        <MyHeader title="购物车案例"></MyHeader>
        <div class="main">
            <MyGoods v-for="obj in list" :key="obj.id"
                     :item="obj"
            ></MyGoods>
        </div>
        <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
        <hr>
        <hr>
        <my-header title="TabBar案例"></my-header>
        <div class="main">
            <component :is="comName"></component>
        </div>
        <my-tab-bar :list="tabList" @change="changeFn"></my-tab-bar>
    </div>
</template>

<script>
//01
import studentInfo from "@/components/studentInfo"
//02
import mangerGoods from "@/components/mangerGoods"
//03
import axios from "axios"
import MyHeader from '@/components/MyHeader'
import MyGoods from '@/components/MyGoods'
import MyFooter from '@/components/MyFooter'
//04
import MyTabBar from "@/components/MyTabBar"
//各种样式文件
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/iconfont.css'

//!将中间动态组件需要的导入进来
import MyGoodsList from "@/views/MyGoodsList"
import MyGoodsSearch from "@/views/MyGoodsSearch"
import MyUserInfo from "@/views/MyUserInfo"

export default {
    data() {
        return {
            comName: 'MyGoodsList',
            list: [],
            tabList: [ // 底部导航的数据
                {
                    iconText: "icon-shangpinliebiao",
                    text: "商品列表",
                    componentName: "MyGoodsList",
                },
                {
                    iconText: "icon-sousuo",
                    text: "商品搜索",
                    componentName: "MyGoodsSearch",
                },
                {
                    iconText: "icon-user",
                    text: "我的信息",
                    componentName: "MyUserInfo",
                },
            ],
        }
    },
    created() {
        // 不必在自己引入axios变量, 而是直接使用全局属性$axios
        this.getList()
    },
    methods: {
        async getList() {
            const {data: res} = await axios.get('https://www.escook.cn/api/cart')
            this.list = res.list
        },
        allFn(val) {
            this.list.forEach(obj => obj.goods_state = val)
        },
        changeFn(comName) {
            this.comName = comName
        }
    },
    components: {
        studentInfo,
        mangerGoods,
        MyHeader,
        MyGoods,
        MyFooter,
        MyTabBar,
        MyGoodsList,
        MyUserInfo,
        MyGoodsSearch
    }
}
</script>

<style>
.main {
    padding-top: 45px;
    padding-bottom: 50px;
}
</style>
