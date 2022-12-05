<template>
  <div class="edit">
    <van-nav-bar title="发布文章" fixed/>
    <div class="edit-filed">
      <van-form>
        <van-field
          v-model="title"
          label="文章标题"
          placeholder="请输入文章标题"
          :rules="rules.title"
        />
        <van-field
          v-model="cateid"
          label="文章分类"
          placeholder="请输入文章分类"
          :rules="rules.content"
        />
        <van-popup v-model="catePicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <van-field
          v-model="tags"
          label="文章标签"
          placeholder="请输入文章标签"
          :rules="rules.content"
        />
        <van-field
          v-model="content"
          label="文件上传"
          placeholder="请输入内容"
          :rules="rules.content"
        />
        <van-field
          v-model="content"
          label="文章正文"
          placeholder="请输入正文内容"
          type="textarea"
          rows="5"
          autosize
          :rules="rules.content"
        />
        <div class="edit-btns" style="display: flex;justify-content: space-around">
          <van-button icon="plus" type="primary">
            发布
          </van-button>
          <van-button icon="send-gift-o" type="info">
            存草稿
          </van-button>
          <van-button icon="revoke" type="danger">
            重置
          </van-button>
        </div>
      </van-form>
    </div>
    <!-- 通用错误 -->
    <van-empty description="登录之后才可以发表哦~" v-if="!token"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Edit',
  data () {
    return {
      title: '',
      content: '',
      cateid: '',
      tags: '',
      rules: {
        title: [
          {
            required: true,
            message: '标题不能为空'
          }
        ],
        content: [
          {
            required: true,
            message: '内容不能为空'
          }
        ]
      },
      catePicker: false
    }
  },
  computed: {
    ...mapState('user', ['token'])
  }
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
    background: #4187f2;

    /deep/ .van-nav-bar__title {
      color: white;
    }

  }
}
</style>
