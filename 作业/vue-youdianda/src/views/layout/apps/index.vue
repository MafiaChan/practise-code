<template>
  <div class="apps">
    <van-nav-bar title="分类" fixed/>
  </div>
</template>

<script>
export default {
  name: 'Apps'
}
</script>

<style lang="less" scoped>
.apps {
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
