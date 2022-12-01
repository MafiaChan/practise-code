<template>
  <div class="layout">
    <!--    二级路由视图-->
    <router-view></router-view>
    <!--  底部导航条-->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/apps" replace>分类</van-tabbar-item>
      <van-tabbar-item icon="edit" to="/edit" replace>发布</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user" replace>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
