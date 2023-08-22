<template>
    <div>
        <el-input v-model="search" @change="doSearch" placeholder="請輸入" />
    </div>
    <el-table :data="comment" style="width: 100%">
        <el-table-column type="index" label="序號" width="75">
            <template #default="scope">
                {{ pageSize * (currentPage - 1) + scope.$index + 1 }}
            </template>
        </el-table-column>
        <el-table-column prop="authorDisplayName" label="作者" width="180" />
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
    <div style="display: flex; justify-content: center; margin: 1rem 0">
        <el-pagination
            v-model:current-page="currentPage"
            layout="prev, pager, next, sizes" 
            :page-size="pageSize"
            :page-sizes="[10, 50, 100]"
            :total="store.comment.length"
            @size-change="handleSizeChange"
        />
    </div>
</template>

<script setup>
    import { ref, getCurrentInstance, computed } from 'vue'
    import { useCommentStore } from '@/store/store'
    const store = useCommentStore();
    const { proxy }  = getCurrentInstance();
    
    const moment = proxy.moment
    
    // page
    const currentPage = ref(1)
    const pageSize = ref(10)

    const handleSizeChange = (val) => {
        pageSize.value = val
    }
    
    const comment = computed(() => {
        return store.comment.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
    })

    // filter
    const search = ref('')
    const doSearch = function() {
        if (search.value === '') {
            store.comment = store.commentOri
        } else {
            store.comment = store.commentOri.filter(function(item, index, array){
                return item.textDisplay.includes(search.value);
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>