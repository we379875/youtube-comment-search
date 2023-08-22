// store.js
import { defineStore } from 'pinia';

export const useCommentStore = defineStore('comment', {
    state: () => ({
        doSearch: false,
        commentOri: [],
        comment: []
    }),
    getters: {

    },
    actions: {

    },
});