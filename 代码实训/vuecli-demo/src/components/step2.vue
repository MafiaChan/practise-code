<template>
    <div>
        <div class="title">
            <span><i>1</i>输入找回账号</span>
            <span class="active"><i>2</i>回答密保问题</span>
            <span><i>3</i>重置密码</span>
        </div>
        <div class="box">
            <div class="input-item">
                <label> 用户名：</label>
                <input type="text" value="xxxx" disabled v-model="this.info.username"/>
            </div>
            <div class="input-item">
                <label> 手机号：</label>
                <input type="text" value="xxxx" disabled v-model="this.info.phone"/>
            </div>
            <div class="input-item">
                <label>密保问题：</label>
                <input type="text" value="xxxxxxx" disabled v-model="this.info.question"/>
            </div>
            <div class="input-item">
                <label>密保答案：</label>
                <input type="text" v-model="answer"/>
            </div>
            <button @click="changeFlag(1)">上一步</button>
            <button @click="nextStep(3)">下一步</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            answer: '',
            info: JSON.parse(localStorage.getItem('userInfo')),
        }
    },
    methods: {
        changeFlag(id) {
            this.$emit('changeFlag', id)
        },
        nextStep(id) {
            this.info.answer = this.answer
            localStorage.setItem('userInfo', JSON.stringify(this.info))
            this.$emit('changeFlag', id)
        }
    }
};
</script>

<style scoped>
@import url('@/assets/css/index.css');
</style>
