<template>
    <div>
        <div class="title">
            <span class="active"><i>1</i>输入找回账号</span>
            <span><i>2</i>回答密保问题</span>
            <span><i>3</i>重置密码</span>
        </div>
        <div class="box">
            <div class="input-item">
                <label>请输入手机号：</label>
                <input type="text" v-model.trim="phone">
            </div>
            <button @click="findPwd">下一步</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Step2 from "@/components/step2"

export default {
    data() {
        return {
            phone: '',
            info: {}
        }
    },
    methods: {
        async findPwd() {
            if (this.phone.length === 0) {
                return alert('请输入手机号')
            }
            const {data: res} = await axios.get(`http://124.223.14.236:3001/api/user/findPwd?phone=${this.phone}`)
            console.log(res)
            if (res.success === true) {
                Object.assign(this.info, res.data)
                localStorage.setItem('userInfo', JSON.stringify(this.info))
                this.$emit('changeFlag', 2)
            } else {
                return alert('手机号不存在')
            }
        }
    },
    components: {
        Step2
    }
}
</script>

<style scoped>
@import url('@/assets/css/index.css');
</style>