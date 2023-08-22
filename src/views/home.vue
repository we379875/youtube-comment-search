<template>
    <div class="header">
        <h1>Youtube 留言抽獎網站</h1>
    </div>
    <div>
        <el-card>
            <videoSearch/>
        </el-card>
    </div>
    <div v-show="store.doSearch" style="margin-top: 1rem">
        <commentTable/>
    </div>
</template>

<script setup>
    import VideoSearch from '@/components/VideoSearch.vue'
    import commentTable from '@/components/commentTable.vue'

    import { useCommentStore } from '@/store/store'

    const store = useCommentStore();
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: center;
        margin: 0;
        background: red;
        color: #f9f9f9;
    }
</style>