<template>
  <div class="user">
    <van-nav-bar title="我的" fixed/>
  </div>
</template>

<script>
export default {
  name: 'User'
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
    background: #3196fa;

    /deep/ .van-nav-bar__title {
      color: white;
    }

  }
}
</style>
