<template>
  <div class="home">
    <van-nav-bar title="首页" fixed/>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getIndexData } from '@/api/source'

export default {
  name: 'Home',
  async created () {
    const res = await getIndexData()
    console.log(res)
  }
}
</script>

<style lang="less" scoped>
.home {
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

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
