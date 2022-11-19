<template>
    <Step1 v-if="flag===1" @changeFlag="changeFlagFn"></Step1>
    <Step2 v-else-if="flag===2" @changeFlag="changeFlagFn"></Step2>
    <Step3 v-else-if="flag===3" @changeFlag="changeFlagFn"></Step3>
</template>

<script>

import Step1 from "@/components/step1"
import Step2 from "@/components/step2"
import Step3 from "@/components/step3"

export default {
    data() {
        return {
            flag: 1
        }
    },
    components: {
        Step1,
        Step2,
        Step3
    },
    methods: {
        changeFlagFn(id) {
            this.flag = id
        }
    }
}
</script>

<style scoped>

</style>