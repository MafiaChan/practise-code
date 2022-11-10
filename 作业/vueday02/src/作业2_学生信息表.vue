<template>
    <div id="app">
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
            <button @click="addFn">添加/修改</button>
        </div>
        <div>
            <table
                    border="1"
                    cellpadding="10"
                    cellspacing="0"
            >
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                        <button @click="delFn(index+1)">删除</button>
                        <button @click="editFn(index)">编辑</button>
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
            //标志
            flag: false,
            index: 0,
            //数据绑定
            name: '',
            age: 1,
            gender: [],
            //数据存放
            list: [{
                id: 1,
                name: '小明',
                age: 18,
                gender: '男'
            }]
        }
    },
    methods: {
        addFn() {
            if (this.name.trim().length === 0 || this.age <= 0 || this.age > 110) {
                return alert('请整个真人')
            }
            if (this.flag) {
                this.list[this.index].name = this.name
                this.list[this.index].age = this.age
                this.list[this.index].gender = this.gender
                return
            }
            this.list.push({
                id: this.list.length + 1,
                name: this.name,
                age: this.age,
                gender: this.gender[0]
            })
            this.name = ''
            this.age = ''
        },
        editFn(index) {
            this.flag = true
            this.index = index
            this.name = this.list[index].name
            this.age = this.list[index].age
            this.gender = this.list[index].gender
        },
        delFn(index) {
            console.log(index)
            this.list.splice(index - 1, 1)
        }
    },
}
</script>
<style>

</style>