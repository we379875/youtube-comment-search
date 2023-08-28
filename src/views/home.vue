<template>
    <div class="header">
        <h1>Youtube 留言抽獎網站</h1>
    </div>
    <div>
        <el-card>
            <videoSearch/>
        </el-card>
    </div>
    <div style="margin-top: 1rem">
        <commentFilter/>
        <el-tabs v-model="activeName">
            <el-tab-pane label="留言列表" name="first">
                <commentTable/>
            </el-tab-pane>
            <el-tab-pane label="中獎名單" name="second">
                <lotteryList/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
    import { ref, getCurrentInstance } from 'vue'
    import { useCommentStore } from '@/store/store'

    import VideoSearch from '@/components/VideoSearch.vue'
    import commentTable from '@/components/commentTable.vue'
    import lotteryList from '@/components/lotteryList.vue'
    import commentFilter from '@/components/commentFilter.vue'


    const store = useCommentStore();

    const activeName = ref('first')
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