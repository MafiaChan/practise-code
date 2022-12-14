<template>
  <div class="user">
    <van-nav-bar title="我的" fixed>
      <template #right>
        <van-icon
          name="setting-o"
          size="18"
          color="#fff"
          v-if="token"
          @click="$router.push('user/editUser')"
        />
      </template>
    </van-nav-bar>
    <div class="user-login" @click="loginFn">
      <div class="left">
        <van-image
          class="user-avatar"
          round
          width="2rem"
          height="2rem"
          :src="token ?url+ userInfo.icon : 'https://img01.yzcdn.cn/vant/cat.jpeg'"
        ></van-image>
        <div class="user-info flex-column">
          <h1 class="user-phone">{{ token ? userInfo.username : '请登录' }}</h1>
          <span class="user-desc">{{ token ? userInfo.notes : '登录之后更加精彩' }}</span>
        </div>
      </div>
      <div class="right" v-if="!token">
        <van-icon name="arrow" color="#fff"/>
      </div>
    </div>
    <div class="user-owner" v-if="token">
      <van-grid :column-num="3">
        <van-grid-item icon="like-o" text="收藏" to="/article"/>
        <van-grid-item icon="thumb-circle-o" text="点赞" to="/article/collect"/>
        <van-grid-item icon="newspaper-o" text="文章" to="/article/likes"/>
      </van-grid>
    </div>
    <div class="user-other">
      <van-cell title="我的文章" icon="newspaper-o" is-link to="/articles"/>
      <van-cell title="我的收藏" icon="thumb-circle-o" is-link to="/articles/collect"/>
      <van-cell title="我的点赞" icon="like-o" is-link to="/articles/likes"/>
    </div>
    <div class="btn">
      <van-button type="info" size="large" v-if="token" @click="remove">立即退出</van-button>
    </div>
  </div>
</template>

<script>
// import { getUserInfo } from '@/api/user'
import { mapActions, mapMutations, mapState } from 'vuex'
// import { getStorageUserInfo, setStorageUserInfo } from '@/utils/storage'

export default {
  name: 'User',
  data () {
    return {
      username: '',
      notes: ''
    }
  },
  computed: {
    ...mapState('user', ['token', 'userInfo']),
    ...mapState(['url'])
  },
  methods: {
    ...mapActions('user', ['actions_setUserInfo']),
    ...mapMutations('user', ['removeUserToken']),
    remove () {
      this.removeUserToken()
    },
    loginFn () {
      if (!this.token) {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.actions_setUserInfo()
    console.log(this.userInfo)
  }
}
</script>

<style lang="less" scoped>
.user {
  height: 100vh;
  width: 100vw;
  padding-top: 46px;
  padding-bottom: 50px;
  overflow: hidden;

  .van-nav-bar {
    background: #4187f2;

    /deep/ .van-nav-bar__title {
      color: white;
    }

  }

  .user-login {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 118px;
    padding: 13px 16px 13px;
    box-sizing: border-box;
    background-color: #4187f2;

    .left {
      display: flex;
      align-items: center;
    }
  }

  .user-info {
    color: #fff;
    margin-left: 10px;

    h1 {
      margin: 0;
      font-size: 18px;
    }

    span {
      font-size: 12px;
    }
  }

  .btn {
    padding: 0 10px;
  }
}
</style>
