<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <h1>优点达资讯</h1>
    <van-form @submit="onSubmit">
      <van-field
        left-icon="manager"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="请输入手机号"
        :rules="rules.username"
      />
      <van-field
        left-icon="lock"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <router-link class="reg" to="/register">没有账号，立即注册</router-link>
  </div>
</template>

<script>
import { userLogin } from '@/api/user'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          {
            required: true,
            message: '手机号不能为空'
          },
          // 通过 pattern 进行正则校验
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations('user', ['setUserToken']),
    onClickLeft () {
      this.$router.go(-1)
    },
    async onSubmit () {
      const { data: res } = await userLogin(this.username, this.password)
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('登录成功')
        this.setUserToken(res.data.token)
        await this.$router.push('/')
      } else {
        this.$toast.fail(res.errmsg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  width: 100vw;
  padding-top: 46px;
  padding-bottom: 50px;
  overflow: hidden;

  .van-nav-bar {
    background: #3196fa;

    /deep/ .van-nav-bar__title {
      color: white;
    }

    /deep/ .van-nav-bar__arrow {
      color: white;
    }
  }

  h1 {
    text-align: center;
    margin-top: 33px;
    margin-bottom: 33px;
    font-weight: normal;
    color: #3b7ef1;
  }

  .reg {
    display: block;
    text-align: right;
    margin-right: 33px;
    font-size: 14px;
  }
}
</style>
