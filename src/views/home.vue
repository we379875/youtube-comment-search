<template>
    <div class="header">
        <h1>Youtube 留言抽獎網站</h1>
    </div>
    <div>
        <el-card>
            <videoSearch/>
        </el-card>
    </div>
    <div v-if="store.doSearch" style="margin-top: 1rem">
        <commentFilter/>
        <div v-if="store.lottery.length > 0">
            <el-button @click="getLottery" v-if="!store.lotteryDone" type="danger">開始抽選</el-button>
            <el-button @click="reLottery" v-else type="success">重新抽選</el-button>
        </div>
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

    // 抽獎
    const getRandom = function(x) {
        return Math.floor(Math.random()*x);
    }

    const getLotteryNum = function(x, num) {
        const arr = []
        let n = 0
        //一注威力彩號碼有6個所以我們讓迴圈跑六次
        for (let i = 0; i < num; i++){
            //用indexOf判斷該數字之前有沒有出現過
            n = getRandom(x);
            if (arr.length < x) {
                if(arr.includes(n)){
                    //如果有出現過就重跑一次迴圈
                    i -= 1;
                    continue;
                } else{
                    //沒出現過的話就寫進字串裡
                    arr.push(n)
                };
            }
        };
        return arr
    }

    const getLottery = function() {
        let x = 0
        store.lottery.forEach((item, index) => {
            x += item.num
        })
        const lotteryNum = getLotteryNum(store.comment.length, x)
        let i = 0
        let lastNum = 0
        console.log(lotteryNum)
        store.lottery.forEach((item, index) => {
            item.winner = []
            for(i; i < lastNum + item.num && i < lotteryNum.length; i++) {
                item.winner.push(store.comment[lotteryNum[i]])
            }
            lastNum += item.num
        })

        activeName.value = 'second'
        store.lotteryDone = true
    }

    const reLottery = function () {
        store.lotteryDone = false
    }
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