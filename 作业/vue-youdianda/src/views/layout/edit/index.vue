<template>
  <div class="edit">
    <van-nav-bar title="发布文章" fixed/>
    <div class="edit-filed">
      <van-form ref="editForm">
        <van-field
          v-model="title"
          label="文章标题"
          placeholder="请输入文章标题"
          :rules="rules.title"
        />
        <van-field
          v-model="cateidName"
          label="文章分类"
          placeholder="请选择文章分类"
          :rules="rules.content"
          @click="catePicker = true"
        />
        <van-popup v-model="catePicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="cateColumns"
            @cancel="catePicker = false"
            @confirm="cateConfirm"
          />
        </van-popup>
        <van-field
          v-model="tagsName"
          label="文章标签"
          placeholder="请选择文章标签"
          :rules="rules.content"
          @click="tagsPicker = true"
        />
        <van-popup v-model="tagsPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="tagsColumns"
            @cancel="tagsPicker = false"
            @confirm="tagsConfirm"
          />
        </van-popup>
        <van-field label="文件上传">
          <template #input>
            <van-uploader v-model="fileList" multiple/>
          </template>
        </van-field>
        <van-field
          v-model="content"
          label="文章正文"
          placeholder="请输入文章正文"
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
          <van-button icon="revoke" type="danger" @click="resetForm">
            重置
          </van-button>
        </div>
        <!--        <van-uploader v-model="fileList" multiple/>-->
      </van-form>
    </div>
    <!-- 通用错误 -->
    <van-empty description="登录之后才可以发表哦~" v-if="!token"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getIndexData } from '@/api/source'

export default {
  name: 'Edit',
  data () {
    return {
      title: '',
      content: '',
      cateidName: '',
      cateid: '',
      tagsName: '',
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
      catePicker: false,
      cateColumns: [],
      tagsPicker: false,
      tagsColumns: [],
      fileList: []
    }
  },
  computed: {
    ...mapState('user', ['token'])
  },
  methods: {
    cateConfirm (value) {
      this.cateidName = value.text
      this.cateid = value.value
      this.catePicker = false
    },
    tagsConfirm (value) {
      this.tagsName = value.text
      this.tags = value.value
      this.tagsPicker = false
    },
    resetForm () {
      this.title = ''
      this.content = ''
      this.cateid = ''
      this.tags = ''
      this.fileList = []
      this.$refs.editForm.resetValidation()
    }
  },
  async created () {
    const { data: res } = await getIndexData()
    console.log(res)
    // 将数据放入picker数组中
    this.cateColumns = res.data.allCate.map(item => {
      return {
        text: item.catename,
        value: item.id
      }
    })
    this.tagsColumns = res.data.allTag.map(item => {
      return {
        text: item.tagname,
        value: item.id
      }
    })
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
