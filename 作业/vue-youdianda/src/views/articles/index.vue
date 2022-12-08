<template>
  <div class="article">
    <van-nav-bar
      title="我的文章"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="article-list">
      <van-list
        class="recent-list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item.id">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="recent-list-title">{{ item.title }}
            </div>
            <div class="recent-list-info">{{ item.description }}</div>
            <div class="recent-opt flex">
              <div class="recent-opt-item flex">
                <van-icon
                  :color="item.isCollect ? '#ffd21e' : '#969799'"
                  size="14"
                  name="eye-o"
                />
                {{ item.isCollect ? '取消' : '收藏' }}({{
                  item.lovenum || 0
                }})
              </div>
              <div class="recent-opt-item flex">
                <van-icon
                  :color="item.isLike ? '#EE0A24' : '#969799'"
                  name="good-job-o"
                  size="14"
                />
                {{ item.isLike ? '取消' : '点赞' }}({{ item.click || 0 }})
              </div>
            </div>
          </template>
          <div class="recent-img">
            <van-image :src="url + item.pic" fit="cover" height="100px"></van-image>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserArticleList } from '@/api/user'

export default {
  name: 'Article',
  data () {
    return {
      page: 1,
      loading: false,
      finished: false,
      list: []
    }
  },
  computed: {
    ...mapState(['url'])
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onLoad () {
      if (this.list.length <= 20) {
        this.finished = true
        this.loading = false
        return
      }
      this.page++
      getUserArticleList(this.page)
      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      this.finished = true
    }
  },
  async created () {
    const { data: res } = await getUserArticleList(this.page)
    console.log(res)
    this.list = res.data.data
  }
}

</script>

<style lang="less" scoped>
.article {
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

    /deep/ .van-nav-bar__arrow {
      color: white;
    }

  }
}

::v-deep {
  .recent-list-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .recent-list-info {
    color: #969799;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .recent-opt {
    .recent-opt-item {
      display: inline-block;
      color: #969799;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
