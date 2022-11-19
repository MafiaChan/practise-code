<template>
    <div>
        <div class="title">
            <span><i>1</i>输入找回账号</span>
            <span><i>2</i>回答密保问题</span>
            <span class="active"><i>3</i>重置密码</span>
        </div>
        <div class="box">
            <div class="input-item">
                <label>请输入新密码：</label>
                <input type="text" v-model="password"/>
            </div>
            <button @click="changeFlag(2)">上一步</button>
            <button @click="reset">立即重置</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            password: '',
            info: JSON.parse(localStorage.getItem('userInfo')),
        }
    },
    methods: {
        changeFlag(id) {
            this.$emit('changeFlag', id)
        },
        async reset() {
            const {data: res} = await axios.post('http://124.223.14.236:3001/api/user/resetPwd', {
                id: this.info.id.toString(),
                password: this.password,
                answer: this.info.answer
            })
            console.log(res)
            if (res.success === true) {
                alert(res.msg)
                location.href = '/login'
            } else {
                return alert('修改失败')
            }

        }
    }
}
</script>

<style scoped>
@import url('@/assets/css/index.css');
</style>
