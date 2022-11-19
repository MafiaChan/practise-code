<template>
    <div id="app">
        <h2>01-学生信息管理</h2>
        <div>
            <span>姓名:</span>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <span>年龄:</span>
            <input type="number" v-model.number="age"/>
        </div>
        <div>
            <span>性别:</span>
            <select v-model="gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>
        <div>
            <button @click="addList">添加/修改</button>
        </div>
        <div>
            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                        <button @click="delList(item.id)">删除</button>
                        <button @click="editList(item.id)">编辑</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //数据绑定
            name: '',
            age: 0,
            gender: '男',
            // 标记
            flag: '',
            list: [
                {
                    id: 10,
                    name: 'xm',
                    age: 10,
                    sex: '男',
                },
                {
                    id: 11,
                    name: 'xh',
                    age: 11,
                    sex: '女',
                },
                {
                    id: 12,
                    name: 'xhua',
                    age: 12,
                    sex: '男',
                },
            ],
        }
    },
    methods: {
        addList() {
            //添加功能
            if (this.flag === '') {
                this.list.push({
                    id: +new Date(),
                    name: this.name,
                    age: this.age,
                    gender: this.gender
                })
            } else {
                //编辑修改功能
                this.flag.name = this.name
                this.flag.age = this.age
                this.flag.gender = this.gender
            }
            //清空重置
            this.name = ''
            this.age = ''
            this.flag = ''
        },

        delList(index) {
            this.list = this.list.filter(item => item.id !== index)
        },
        editList(index) {
            const obj = this.list.find(item => item.id === index)
            this.flag = obj
            const {name, age, gender} = obj
            this.name = name
            this.age = age
            this.gender = gender
        }
    }
}
</script>
