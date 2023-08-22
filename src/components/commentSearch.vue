<template>
    <div style="display: flex;">
        <el-input v-model="comment" placeholder="請輸入留言" />
        <el-button @click="search" type="primary">搜尋</el-button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const comment = ref("")
    const search = function () {
        alert(comment.value)
    }
</script>

<style lang="scss" scoped>

</style>