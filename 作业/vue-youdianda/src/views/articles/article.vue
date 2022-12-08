<template>
  <div class="user-article">
    <van-nav-bar
      title="文章详情"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 文章详情 -->
    <div class='detail'>
      <h1 class='title'>{{ artInfo.title }}</h1>
      <div style="display: flex;justify-content: flex-start;padding: 0 10px">
        <div class='author'>
          <van-image
            :src='url+artInfo.pic'
            round
            width='1rem'
            height='1rem'
            fit='fill'/>
        </div>
        <div class="author-name" style="display:flex;flex-direction: column">
          <span class="author-name">{{ artInfo.author }}</span>
          <span class="pub-time">{{ Date.now(artInfo.create_date) | fromNow }}</span>
        </div>
      </div>
      <div class='content'>
        <div>{{ artInfo.content }}</div>
      </div>

      <!--分割线-->
      <van-divider>正文结束</van-divider>

      <!--热门推荐-->
      <van-cell title="相关推荐" size="large"/>
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in recommend"
          :key="item.id"
          @click="$router.push('/article/' + item.id)"
        >
          <van-image :src="url+item.pic" style="width: 120px;height: 100px;"/>
          <p>{{ item.title }}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api/source'
import { mapState } from 'vuex'

export default {
  name: 'UserArticle',
  data () {
    return {
      artInfo: {},
      recommend: []
    }
  },
  computed: {
    ...mapState(['url']),
    artId () {
      return this.$route.params.id
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  async created () {
    const { data: { data: res } } = await getArticleDetail(this.artId)
    console.log(res)
    this.artInfo = res.info
    this.recommend = res.recommend
  }
}
</script>

<style lang="less" scoped>
.user-article {
  height: 100vh;
  width: 100vw;
  padding-top: 46px;
  padding-bottom: 50px;
  overflow: hidden;
  overflow-y: scroll;

  .van-nav-bar {
    background: #3196fa;

    /deep/ .van-nav-bar__title {
      color: white;
    }

    /deep/ .van-nav-bar__arrow {
      color: white;
    }

  }

  .title {
    font-size: 20px;
    padding: 25px 15px;
    margin: 0;
    color: #3a3a3a;
  }

  .content {
    padding: 25px 15px;
  }
}
</style>
