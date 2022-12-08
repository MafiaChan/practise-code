<template>
  <div class="home">
    <div class="home-main">
      <van-nav-bar title="首页" fixed/>
      <!--    轮播图部分-->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banner" :key="item.id">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="url+item.advimgsrc"
          ></van-image>
        </van-swipe-item>
      </van-swipe>
      <!--    通知栏部分-->
      <van-notice-bar
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
    <div class="home-hot">
      <van-cell>
        <template #title>
          <span style="color: #1989fa; font-weight: bold;">热门推荐</span>
        </template>
      </van-cell>
      <van-grid :column-num="3" class="hot-grid">
        <van-grid-item
          v-for="item in hot"
          :key="item.id"
          @click="$router.push('/article/' + item.id)"
        >
          <div class="flex-column">
            <div class="hot-img">
              <van-image
                width="100%"
                height="100px"
                :src="url + item.pic"
                fit="cover"
              >
              </van-image>
            </div>
            <div class="hot-title">{{ item.title || '' }}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="recent">
      <van-cell>
        <template #title>
          <span style="color: #1989fa; font-weight: bold;">最近更新</span>
        </template>
        <template #default>
          <span style="font-size: 12px;">24小时:{{ recent.num_day }}篇&nbsp;/&nbsp; 1周:{{ recent.num_week }}篇</span>
        </template>
      </van-cell>
      <van-list
        class="recent-list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in recentList"
          :key="item.id"
          @click="$router.push('/article/' + item.id)"
        >
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      loading: false,
      finished: false
    }
  },
  computed: {
    ...mapState(['url']),
    ...mapState('source', ['banner', 'hot', 'recent', 'recentList'])
  },
  methods: {
    ...mapActions('source', ['actions_setBanner', 'actions_setHot', 'actions_setHotData']),
    onLoad () {
      if (this.recentList.length <= 20) {
        this.finished = true
        this.loading = false
        return
      }
      this.page++
      this.actions_setHotData(this.page)
      // 加载状态结束
      this.loading = false

      // 数据全部加载完成
      this.finished = true
    }
  },
  created () {
    this.actions_setBanner()
    this.actions_setHot()
    this.actions_setHotData()
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
  overflow-y: scroll;

  .van-nav-bar {
    background: #4187f2;

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
    width: 100%;
    height: 180px;

    .flex-column {
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    .hot-img {
      flex: 1;
      width: 100%;
      overflow: hidden;
    }
  }

  .recent-img {
    width: 100%;
    box-sizing: border-box;
    padding-left: 60px;
    height: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
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

::v-deep {
  .hot-title {
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

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
}
</style>
