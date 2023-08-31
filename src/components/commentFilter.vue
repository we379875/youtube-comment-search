<template>
    <el-card>
        <h3>篩選區塊</h3>
        <el-row>
            <el-col :span="6" class="flex-center-center">
                <div style="white-space:nowrap">留言包含：</div>
                <el-input  v-model="commentSearch" @change="doSearch" placeholder="請輸入" style="width: 80%" />
            </el-col>
            <el-col :span="6" class="flex-center-center">
                <div style="white-space:nowrap">留言者：</div>
                <el-input  v-model="nameSearch" @change="doSearch" placeholder="請輸入" style="width: 80%" />
            </el-col>
            <el-col :span="12" class="flex-center-center">
                <div style="white-space:nowrap">時間區間：</div>
                <el-date-picker
                    v-model="daterange"
                    type="daterange"
                    range-separator="到"
                    start-placeholder="開始時間"
                    end-placeholder="結束時間"
                    @change="doSearch"
                />
            </el-col>
        </el-row>
    </el-card>

    <el-card style="margin-top: 1rem">
        <h3>獎項區塊</h3>
        <el-row>
            <el-col :span="6" class="flex-center-center">
                <div style="white-space:nowrap">獎品內容</div>
                <el-input v-model="lottery" placeholder="請輸入" style="width: 80%" />
            </el-col>
            <el-col :span="6" class="flex-center-center">
                <div style="white-space:nowrap">抽取人數</div>
                <el-input-number v-model="lotteryNum" :min="1" />
            </el-col>
            <el-button @click="addLottery" type="primary">新增</el-button>
        </el-row>

        <ul>
            <li
                v-for="(tag, index) in store.lottery"
                :key="index"
                style="text-align: left;"
            >
                <div style="display: flex; align-items: center">
                    <div v-if="!tag.edit">
                        {{ tag.item }} {{ tag.num }}位
                    </div>
                    <div v-else>
                        <el-input v-model="tag.item" placeholder="請輸入" style="width: 30%" />
                        <el-input-number v-model="tag.num" :min="1" />位
                    </div>
                    <el-button v-if="!tag.edit" @click="editLottery(tag, index)" type="success">編輯</el-button>
                    <el-button v-else @click="editLottery(tag, index)" type="primary">完成</el-button>
                    <el-button @click="removeLottery(tag, index)" type="danger">刪除</el-button>
                </div>
            </li>
        </ul>
    </el-card>
</template>

<script setup>
    import { ref, getCurrentInstance, computed } from 'vue'
    import { useCommentStore } from '@/store/store'
    import { ElMessage } from 'element-plus'

    const store = useCommentStore();
    const { proxy }  = getCurrentInstance();
    const moment = proxy.moment

    // filter
    const commentSearch = ref('')
    const nameSearch = ref('')
    const daterange = ref(null)
    const doSearch = function() {
        let startDate
        let endDate
        
        if (daterange.value !== null) {
            if (daterange.value[0]) {
                startDate = daterange.value[0].getTime()
            }
            if (daterange.value[1]) {
                endDate = moment(daterange.value[1]).add(23, 'h').add(59, 'm').add(59, 's').add(999, 'ms').format()
                endDate  = new Date(endDate).getTime()
            }
        }
        store.comment = store.commentOri.filter(function(item, index, array){
            const publishedAt = new Date(item.publishedAt).getTime()
            const textMatch = item.textDisplay.includes(commentSearch.value) && item.authorDisplayName.includes(nameSearch.value)
            if (startDate && endDate) {
                const timeMatch = publishedAt >= startDate && publishedAt <= endDate
                return textMatch && timeMatch
            } else {
                return textMatch;
            }
            
        });
    }

    // lottery
    const lottery = ref('')
    const lotteryNum = ref(1)
    const addLottery = function () {
        const nowLottery = store.lottery.map(item => item.item)
        if (lottery.value === '') {
            ElMessage({
                message: '請填寫獎項名稱',
                type: 'warning',
            })
        } else if (nowLottery.includes(lottery.value)) {
            ElMessage({
                message: '已有此獎項名稱',
                type: 'warning',
            })
        } else {
            store.addLottery(lottery.value, lotteryNum.value);
        }
    }
    const removeLottery = function (tag, index) {
        store.lottery.splice(index, 1)
    }
    const editLottery = function (tag, index) {
        tag.edit = !tag.edit
    }
</script>

<style lang="scss" scoped>

</style>