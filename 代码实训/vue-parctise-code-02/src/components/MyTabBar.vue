<template>
    <div class="my-tab-bar">
        <div
                v-for="(item,index) in list"
                :key="index"
                class="tab-item"
                :class="{current:activeIndex===index}"
                @click="change(index,item.componentName)"
        >
            <!-- 图标 -->
            <span class="iconfont" :class="item.iconText"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0
        }
    },
    props: {
        list: {
            type: Array,
            required: true,
            validator(val) {
                if (val.length >= 2 && val.length <= 5) {
                    return true
                } else {
                    return false
                }
            }
        }
    },
    methods: {
        change(id, comName) {
            this.activeIndex = id
            this.$emit('change', comName)
        }
    }

}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
