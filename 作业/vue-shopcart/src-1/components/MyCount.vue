<template>
    <div class="my-counter">
        <button type="button" class="btn btn-light" :disabled="item.goods_count===1" @click="minusFn">-</button>
        <input type="number" class="form-control inp" v-model="item.goods_count">
        <button type="button" class="btn btn-light" @click="addFn">+</button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        }
    },
    methods: {
        addFn() {
            this.item.goods_count++
        },
        minusFn() {
            if (this.item.goods_count <= 0) {
                return
            }
            this.item.goods_count--
        }
    },
    watch: {
        item: {
            deep: true,
            handler() {
                if (this.item.goods_count <= 0) {
                    this.item.goods_count = 1
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;

  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }

  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
