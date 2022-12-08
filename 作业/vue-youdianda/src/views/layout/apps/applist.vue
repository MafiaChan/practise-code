<template>
  <div class="appList">
    <van-nav-bar
      title="列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model='active'>
      <van-tab v-for='item in cate' :key='item.id' :title='item.catename'>
        <art-list :id='item.id'></art-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getIndexData } from '@/api/source'
import artList from '@/views/layout/apps/artList.vue'

export default {
  name: 'AppList',
  data () {
    return {
      active: 0,
      cate: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  components: {
    artList
  },
  async created () {
    const { data: res } = await getIndexData()
    console.log(res)
    this.cate = res.data.allCate
  }
}
</script>

<style scoped>

</style>
