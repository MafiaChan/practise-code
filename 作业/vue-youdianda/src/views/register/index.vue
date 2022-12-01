<template>
  <div class="register">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <h1>欢迎注册</h1>
    <van-form @submit="onSubmit">
      <van-field
        left-icon="manager"
        v-model.number="username"
        name="用户名"
        label="用户名"
        placeholder="请输入手机号"
        :rules="rules.username"
      />
      <van-field
        left-icon="lock"
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
      />
      <van-field
        left-icon="lock"
        v-model="rePassword"
        type="password"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ validator, message: '请再次输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">立即注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { userRegister } from '@/api/user'
import { mapMutations } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      rePassword: '',
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
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator (val) {
      return val === this.password
    },
    async onSubmit () {
      // console.log('submit')
      const { data: res } = await userRegister(this.username, this.password)
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('注册成功')
        this.setUserToken(res.data.token)
        await this.$router.push('/login')
      } else {
        this.$toast.fail(res.errmsg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register {
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
