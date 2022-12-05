<template>
  <div class="edit-user">
    <van-nav-bar
      title="修改用户资料"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <div class="edit-pannel">
      <van-cell title="头像" is-link>
        <van-image
          round
          width="0.8rem"
          height="0.8rem"
          :src="url+userInfo.icon"
        ></van-image>
      </van-cell>
      <van-cell title="昵称" is-link @click="nameShowFn">
        {{ userInfo.username }}
      </van-cell>
      <van-cell title="手机号" is-link @click="mobileShowFn">
        {{ userInfo.mobile }}
      </van-cell>
      <van-cell title="性别" is-link @click="sexShow = true">
        {{ userInfo.sex ? '男' : '女' }}
      </van-cell>
      <van-cell title="出生年月" is-link @click="birthShowFn">
        {{ userInfo.birthday }}
      </van-cell>
      <van-cell title="家庭住址" is-link :label="userInfo.address" @click="homeShowFn"/>
      <van-cell title="个性留言" is-link :label="userInfo.notes" @click="noteShowFn"/>
    </div>
    <div class="edit-popup">
      <van-popup
        v-model="nameShow"
        position="bottom"
        :style="{ height: '100%', background:'#f3f5f7' }"
      >
        <van-nav-bar
          title="修改昵称"
          left-text="取消"
          right-text="完成"
          @click-left="nameShow = false"
          @click-right="editName"
        />
        <div class="input-filed">
          <van-field
            v-model="newName"
            rows="2"
            autosize
            type="textarea"
            maxlength="7"
            show-word-limit
          />
        </div>
      </van-popup>
      <van-popup
        v-model="mobileShow"
        position="bottom"
        :style="{ height: '100%', background:'#f3f5f7' }"
      >
        <van-nav-bar
          title="修改手机"
          left-text="取消"
          right-text="完成"
          @click-left="mobileShow = false"
          @click-right="editMobile"
        />
        <div class="input-filed">
          <van-field
            v-model="newMobile"
            rows="2"
            autosize
            type="textarea"
            maxlength="11"
            show-word-limit
            :rules="rules.mobile"
          />
        </div>
      </van-popup>
      <van-popup
        v-model="sexShow"
        position="bottom"
        :style="{ height: '30%' }">
        <van-picker
          title="请选择性别"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="sexShow = false"
        />
      </van-popup>
      <van-popup
        v-model="birthShow"
        position="bottom"
        :style="{ height: '42%' }"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="请选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="dateConfirm"
          @cancel="birthShow = false"
        />
      </van-popup>
      <van-popup
        v-model="homeShow"
        position="bottom"
        :style="{ height: '100%', background:'#f3f5f7' }"
      >
        <van-nav-bar
          title="编辑地址"
          left-text="取消"
          right-text="完成"
          @click-left="homeShow = false"
          @click-right="editHome"
        />
        <div class="input-filed">
          <van-field
            v-model="newHome"
            rows="2"
            autosize
            type="textarea"
            maxlength="15"
            show-word-limit
          />
        </div>
      </van-popup>
      <van-popup
        v-model="noteShow"
        position="bottom"
        :style="{ height: '100%', background:'#f3f5f7' }"
      >
        <van-nav-bar
          title="编辑个性留言"
          left-text="取消"
          right-text="完成"
          @click-left="noteShow = false"
          @click-right="editNote"
        />
        <div class="input-filed">
          <van-field
            v-model="newNote"
            rows="2"
            autosize
            type="textarea"
            maxlength="30"
            show-word-limit
          />
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { updateUserInfo } from '@/api/user'
import moment from 'moment'

export default {
  name: 'EditUser',
  data () {
    return {
      nameShow: false,
      newName: '',
      mobileShow: false,
      newMobile: '',
      rules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          // 通过 pattern 进行正则校验
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号'
          }
        ]
      },
      sexShow: false,
      columns: [
        {
          text: '男',
          value: 1
        },
        {
          text: '女',
          value: 0
        }
      ],
      birthShow: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(2100, 11, 1),
      currentDate: new Date(),
      homeShow: false,
      newHome: '',
      noteShow: false,
      newNote: ''
    }
  },
  computed: {
    ...mapState('user', ['token', 'userInfo']),
    ...mapState(['url'])
  },
  methods: {
    ...mapActions('user', ['actions_setUserInfo']),
    onClickLeft () {
      this.$router.go(-1)
    },
    nameShowFn () {
      this.nameShow = true
      this.newName = this.userInfo.username
    },
    async editName () {
      this.nameShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        username: this.newName
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    mobileShowFn () {
      this.mobileShow = true
      this.newMobile = this.userInfo.mobile
    },
    async editMobile () {
      this.mobileShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        mobile: this.newMobile
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    async onConfirm (value) {
      // console.log(value)
      this.sexShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        sex: value.value
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    async dateConfirm (value) {
      // console.log(value)
      this.birthShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        birthday: moment(value).format('YYYY-MM-DD')
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    homeShowFn () {
      this.homeShow = true
      this.newHome = this.userInfo.address
    },
    async editHome () {
      this.homeShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        address: this.newHome
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    noteShowFn () {
      this.noteShow = true
      this.newNote = this.userInfo.notes
    },
    async editNote () {
      this.noteShow = false
      const { data: res } = await updateUserInfo({
        id: this.userInfo.id,
        notes: this.newNote
      })
      console.log(res)
      if (res.errno === 0) {
        this.$toast.success('修改成功')
        await this.actions_setUserInfo()
      } else {
        this.$toast.fail('修改失败')
      }
    },
    birthShowFn () {
      this.birthShow = true
      this.currentDate = new Date(this.userInfo.birthday)
    }
  },
  created () {
    this.actions_setUserInfo()
  }
}
</script>

<style lang="less" scoped>
.edit-user {
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

  .edit-popup {
    .van-nav-bar {
      background: white;

      /deep/ .van-nav-bar__title {
        color: black;
      }
    }

    .input-filed {
      padding: 5px 5px;
    }
  }
}
</style>
