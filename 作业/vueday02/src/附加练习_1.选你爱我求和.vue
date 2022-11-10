<template>
    <div>
        <!-- 无id时, 可以使用index(反正也是就地更新) -->
        <span v-for="(item, index) in arr" :key="index">
            <input type="checkbox" v-model="selected" :value="item"/>
            <i>{{ item }}</i>
        </span>
        <p>你选中的元素, 累加的值和为: {{ isSum }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
            selected: []
        };
    },
    computed: {
        isSum() {
            return this.selected.reduce((prev, item) => prev + item, 0)
        }
    },
};
</script>

<style>
i {
    margin: 0 2px;
}
</style>