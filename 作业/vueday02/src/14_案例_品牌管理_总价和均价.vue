<template>
    <div id="app">
        <div class="container">
            <!-- 顶部框模块 -->
            <div class="form-group">
                <div class="input-group">
                    <h4>品牌管理</h4>
                </div>
            </div>

            <!-- 数据表格 -->
            <table class="table table-bordered table-hover mt-2">
                <thead>
                <tr>
                    <th>编号</th>
                    <th>资产名称</th>
                    <th>价格</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <!--<tr>-->
                <!--	<td></td>-->
                <!--	<td></td>-->
                <!--	&lt;!&ndash; 如果价格超过100，就有red这个类 &ndash;&gt;-->
                <!--	<td class="red"></td>-->
                <!--	<td></td>-->
                <!--	<td><a href="#">删除</a></td>-->
                <!--</tr>-->
                <tr v-for="item in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <!--<td :class="{red:item.price>100}">{{ item.price }}</td>-->
                    <td :style="{color:item.price>100?'red':''}">{{ item.price }}</td>
                    <td>{{ item.time | formatTime }}</td>
                    <td><a href="#" @click="delItem(item.id)">删除</a></td>
                </tr>
                <!-- 不用循环，展示总价 和 平均价 -->
                <tr style="background-color: #EEE" v-show="list.length !== 0">
                    <td>统计:</td>
                    <td colspan="2">总价钱为:{{ total }}</td>
                    <td colspan="2">平均价:{{ avg }}</td>
                </tr>
                </tbody>
                <!-- 底部的提示消息 -->
                <tfoot v-show="list.length===0">
                <tr>
                    <td colspan="5" style="text-align: center">暂无数据</td>
                </tr>
                </tfoot>
            </table>

            <!-- 添加资产 -->
            <form class="form-inline">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="资产名称" v-model="name"/>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="价格" v-model.number="price"/>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- 阻止表单提交 -->
                <button class="btn btn-primary" @click.prevent="addList">添加资产</button>
            </form>
        </div>
    </div>
</template>

<script>
import moment from "moment"

export default {
    data() {
        return {
            name: "", // 名称
            price: 0, // 价格
            list: JSON.parse(localStorage.getItem('goodsList')) || []
        };
    },
    methods: {
        addList() {
            if (this.name.trim().length === 0 || this.price <= 0) {
                return alert('资产不能为空')
            }
            this.list.unshift({
                id: +new Date(),
                name: this.name,
                price: this.price,
                time: new Date()
            })
            this.name = ''
            this.price = ''
        },
        delItem(id) {
            this.list.splice(this.list.findIndex(item => item.id === id), 1)
            // this.list = this.list.filter(item => item.id !== id)
        }
    },
    filters: {
        formatTime(val) {
            return moment(val).format('YYYY-MM-DD')
        }
    },
    computed: {
        total() {
            return this.list.reduce((prev, item) => prev + item.price, 0)
        },
        avg() {
            return (this.total / this.list.length).toFixed(2)
        }
    },
    watch: {
        list: {
            handler() {
                localStorage.setItem('goodsList', JSON.stringify(this.list))
            },
            deep: true
        }
    }

};
</script>

<style>
/*.red {*/
/*	color: red;*/
/*}*/
</style>
