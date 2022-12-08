<template>
  <div class="apps">
    <van-nav-bar title="分类" fixed/>
    <van-grid :border="false" :column-num="2" gutter="30px">
      <van-grid-item
        v-for="item in cate"
        :key="item.id"
        to="/apps/applist"
      >
        <i :class="'fa '+item.icon"></i>
        <p>{{ item.catename }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getIndexData } from '@/api/source'

export default {
  name: 'Apps',
  data () {
    return {
      cate: []
    }
  },
  async created () {
    const { data: res } = await getIndexData()
    console.log(res)
    this.cate = res.data.allCate
  }
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

  .van-grid-item p {
    color: #646566;
    font-size: .32rem;
    line-height: 1.5;
    word-break: break-all;
    margin-top: 3px;
  }
}
</style>
