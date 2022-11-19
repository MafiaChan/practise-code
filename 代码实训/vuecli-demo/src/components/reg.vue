<template>
    <div class="rg_layout">
        <div class="rg_left">
            <p>新用户注册</p>
            <p>USER REGISTER</p>
        </div>
        <div class="rg_center">
            <div class="rg_form">
                <form action="#" method="post">
                    <table>
                        <tr>
                            <td class="td_left"><label for="username">用户名</label></td>
                            <td class="td_right">
                                <input type="text" id="username" v-model="username"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="password">密码</label></td>
                            <td class="td_right">
                                <input type="password" id="password" v-model="password"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="phone">手机号</label></td>
                            <td class="td_right">
                                <input type="text" id="phone" v-model="phone"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="">性别</label></td>
                            <td class="td_right">
                                <label
                                ><input type="radio" name="sex" value="1" checked v-model="sex"/>男</label
                                >&nbsp;&nbsp;&nbsp;
                                <label><input type="radio" name="sex" value="0" v-model="sex"/>女</label>
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="">是否VIP</label></td>
                            <td class="td_right">
                                <label><input type="radio" name="vip" value="1" v-model.number="vip"/>是</label
                                >&nbsp;&nbsp;&nbsp;
                                <label
                                ><input type="radio" name="vip" value="0" checked v-model.number="vip"/>否</label
                                >
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="question">密保问题</label></td>
                            <td class="td_right">
                                <input type="text" id="question" v-model="question"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="td_left"><label for="answer">密保答案</label></td>
                            <td class="td_right">
                                <input type="text" id="answer" v-model="answer"/>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="center">
                                <input type="submit" value="立即注册" id="btn_sub" @click.prevent="reg"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            username: '',
            password: '',
            phone: '',
            sex: 1,
            vip: 0,
            question: '',
            answer: ''
        }
    },
    methods: {
        async reg() {
            const {data: res} = await axios.post('http://124.223.14.236:3001/api/user/reg', {
                username: this.username,
                password: this.password,
                phone: this.phone,
                sex: this.sex,
                vip: this.vip,
                question: this.question,
                answer: this.answer
            })
            console.log(res)
            if (res.success === true) {
                location.href = '/login'
            }
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    padding-top: 25px;
}

.rg_layout {
    width: 900px;
    min-height: 500px;
    border: 8px solid #eeeeee;
    background-color: white;
    margin: 100px auto 0;
    overflow: hidden;
}

.rg_left {
    float: left;
    margin: 15px;
}

.rg_left > p:first-child {
    color: #ffd026;
    font-size: 20px;
}

.rg_left > p:last-child {
    color: #a6a6a6;
    font-size: 20px;
}

.rg_center {
    float: left;
    margin-top: 30px;
}

/*.rg_right {*/
/*    float: right;*/
/*    margin: 15px;*/
/*    padding-left: 50px;*/
/*}*/

.rg_right p {
    font-size: 15px;
}

.rg_right p a {
    color: coral;
}

.td_left {
    width: 100px;
    text-align: right;
    height: 45px;
}

.td_right {
    padding-left: 50px;
}

#username,
#password,
#question,
#answer,
#phone {
    width: 251px;
    height: 32px;
    border: 1px solid #a6a6a6;
    /*设置边框圆角*/
    border-radius: 5px;
    padding-left: 10px;
}

/*#checkcode {*/
/*    width: 110px;*/
/*}*/

/*#img_check {*/
/*    height: 32px;*/
/*    vertical-align: middle;*/
/*}*/

#btn_sub {
    width: 100px;
    height: 40px;
    background-color: #efbf11;

    border: 1px solid #ffd026;
    padding-left: 10px;
    color: #fff;
    cursor: pointer;
}

#btn_sub:hover {
    background-color: #ffd026;
}
</style>
