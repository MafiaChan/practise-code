<template>
    <div>
        <h2>练习3_购物车【基础】</h2>
        <table>
            <tr>
                <th>编号</th>
                <th>品牌名称</th>
                <th>创立时间</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.time }}</td>
                <td>
                    <button @click="isDel(index)">删除</button>
                </td>
            </tr>
            <tr v-if="list.length === 0">
                <td colspan="4">没有数据咯~</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "practise-code-03",
    data() {
        return {
            list: [
                {id: 1, name: "奔驰", time: "2020-08-01"},
                {id: 2, name: "宝马", time: "2020-08-02"},
                {id: 3, name: "奥迪", time: "2020-08-03"},
            ],
        }
    },
    methods: {
        isDel(index) {
            this.list.splice(index, 1);
        }
    }
}
</script>

<style lang="less" scoped>
table {
  border-collapse: collapse;
  width: 100%;

  th {
    background-color: blue;
    color: white;
  }

  td,
  th {
    text-align: center;
    padding: 5px;
    border: 1px solid black;
  }

}
</style>