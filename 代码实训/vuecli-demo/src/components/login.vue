<template>
    <div class="container">
        <section id="content">
            <form>
                <h1>账号登录</h1>
                <div>
                    <i class="close">X</i>
                    <input type="text" placeholder="手机号" id="username" v-model="username">
                </div>
                <div>
                    <i class="close">X</i>
                    <input type="password" placeholder="密码" id="password" v-model="password">
                </div>
                <div>
                    <input
                            type="submit"
                            value="登录"
                            class="btn btn-primary"
                            id="js-btn-login"
                            @click.prevent="login"
                    >

                    <router-link to="/reg">去注册</router-link>

                    <router-link to="/password">忘记密码？</router-link>

                </div>
            </form>
        </section>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const {data: res} = await axios.post('http://124.223.14.236:3001/api/user/login', {
                username: this.username,
                password: this.password
            })
            console.log(res)
            if (res.success === true) {
                alert(res.msg)
                this.username = ''
                this.password = ''
            } else {
                alert('登陆失败')
                this.password = ''
            }
        },
    },

}
</script>

<style scoped>
@import url('@/assets/css/style.css');
@import url('@/assets/css/body.css');
</style>
