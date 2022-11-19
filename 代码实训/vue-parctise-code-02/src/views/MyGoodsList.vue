<template>
    <div class="my-goods-list">
        <my-table :list="list">
            <template #head>
                <th>#</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template #body="scoped">
                <td>{{ scoped.item.id }}</td>
                <td>{{ scoped.item.goods_name }}</td>
                <td>{{ scoped.item.goods_price }}</td>
                <td>
                    <div>
                        <!--输入框-->
                        <input
                                style="width: 150px"
                                class="tag-input form-control"
                                type="text"
                                v-model.trim="scoped.item.inputValue"
                                v-if="scoped.item.inputVisible"
                                v-focus
                                @blur="scoped.item.inputVisible=false"
                                @keyup.esc="scoped.item.inputValue=''"
                                @keyup.enter="addFn(scoped.item)"
                        />
                        <button class="btn btn-primary btn-sm add-tag" v-else
                                @click="scoped.item.inputVisible=true">
                            +Tag
                        </button>
                    </div>
                    <span
                            v-for="(item,index) in scoped.item.tags"
                            :key="index"
                            class="badge bg-warning text-dark"
                    >
                        {{ item }}
                    </span>

                </td>
                <td>
                    <button
                            class="btn btn-danger btn-sm"
                            @click="delFn(scoped.item.id)"
                    >删除
                    </button>
                </td>
            </template>
        </my-table>
    </div>
</template>

<script>
import MyTable from "@/components/MyTable"
import axios from 'axios'
// 接口：GTE  https://www.escook.cn/api/goods

export default {
    data() {
        return {
            list: [],
        };
    },
    methods: {
        async getList() {
            const {data: res} = await axios.get('https://www.escook.cn/api/goods')
            console.log(res)
            this.list = res.data
            // console.log(this.list)
        },
        delFn(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        addFn(obj) {
            if (obj.inputValue.length === 0) {
                return alert('tags不能为空')
            }
            obj.tags.push(obj.inputValue)
            obj.inputValue = ''
        }
    },
    created() {
        this.getList()
    },
    components: {
        MyTable
    },
    directives: {
        focus: {
            inserted(el) {
                el.focus()
            }
        }
    }
};
</script>

<style>
</style>
