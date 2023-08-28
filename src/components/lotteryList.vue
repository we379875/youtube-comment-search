<template>
    <div v-for="(item, index) in store.lottery" :key="index">
        {{ item.item }} {{ item.num }}位
        <el-table :data="item.winner" style="width: 100%">
            <el-table-column type="index" label="序號" width="75">
                <template #default="scope">
                    {{ scope.$index + 1 }}
                </template>
            </el-table-column>
            <el-table-column prop="authorDisplayName" label="中獎者" width="180" />
            <el-table-column prop="textDisplay" label="留言">
                <template #default="scope">
                    <p v-html='scope.row.textDisplay'></p>
                </template>
            </el-table-column>
            <el-table-column prop="publishedAt" label="發布時間" width="180">
                <template #default="scope">
                    {{ moment(scope.row.publishedAt).format('YYYY-MM-DD HH:mm:ss') }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
    import { ref, getCurrentInstance, computed } from 'vue'
    import { useCommentStore } from '@/store/store'
    const store = useCommentStore();
    const { proxy }  = getCurrentInstance();
    
    const moment = proxy.moment
</script>

<style lang="scss" scoped>

</style>