<template>
  <div class="edit">
    <van-nav-bar title="发布" fixed/>
  </div>
</template>

<script>
export default {
  name: 'Edit'
}
</script>

<style lang="less" scoped>
.edit {
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
