// store.js
import { defineStore } from 'pinia';

export const useCommentStore = defineStore('comment', {
    state: () => ({
        doSearch: false,
        lotteryDone: false,
        commentOri: [],
        comment: [],
        lottery: [],
    }),
    getters: {

    },
    actions: {
        addLottery (item, num = 1) {
            this.lottery.push({
                item: item,
                num: num,
                edit: false,
                winner: []
            });
        }
    },
});