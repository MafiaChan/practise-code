<template>
    <div class="body">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">添加新图书</h3>
            </div>
            <form class="panel-body form-inline">
                <div class="input-group">
                    <div class="input-group-addon">书名</div>
                    <input
                            type="text"
                            class="form-control"
                            placeholder="请输入书名"
                    />
                </div>

                <div class="input-group">
                    <div class="input-group-addon">作者</div>
                    <input
                            type="text"
                            class="form-control"
                            placeholder="请输入作者"
                    />
                </div>

                <div class="input-group">
                    <div class="input-group-addon">出版社</div>
                    <input
                            type="text"
                            class="form-control"
                            placeholder="请输入出版社"
                    />
                </div>

                <button class="btn btn-primary" @click.prevent="addFn">添加</button>
            </form>
        </div>

        <!-- 图书的表格 -->
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>Id</th>
                <th>书名</th>
                <th>作者</th>
                <th>出版社</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.bookname }}</td>
                <td>{{ item.author }}</td>
                <td>{{ item.publisher }}</td>
                <td>
                    <a href="javascript:;" class="del" @click="delFn(item.id)">删除</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// todo axios 实现图书管理案例
//  安装 bootstrap  需要安装3的版本  yarn add bootstrap@3
//  导入 bootstrap的css文件美化样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 接口地址： https://www.showdoc.com.cn/1834761734600444/8449559255355128
import axios from "axios"

axios.defaults.baseURL = 'http://ajax-api.itheima.net'

export default {
    data() {
        return {
            //图书数据存放
            list: [],
            //书名，作者，出版社
            bookname: '',
            author: '',
            publisher: ''
        }
    },
    methods: {
        async getList() {
            const {data: {data: res}} = await axios.get('/api/books')
            // console.log(res)
            this.list = res
        },
        async delFn(id) {
            await axios.delete(`/api/books/${id}`)
            await this.getList()
        },
        async addFn() {
            if (this.bookname.length === 0 || this.author.length === 0 || this.publisher.length === 0) {
                return alert('不能为空')
            }
            const {data: {data: res}} = await axios.post('/api/books', {
                bookname: this.bookname,
                author: this.author,
                publisher: this.publisher
            })
            console.log(res)
            this.bookname = ''
            this.author = ''
            this.publisher = ''
            await this.getList()
        }
    },
    created() {
        //通过this来调用方法
        this.getList()
    }
}
</script>

<style scoped>
.body {
    padding: 15px;
}
</style>
