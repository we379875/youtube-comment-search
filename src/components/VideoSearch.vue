<template>
    <div style="display: flex;">
        <el-input v-model="videourl" placeholder="請輸入影片網址" />
        <el-button @click="search" type="primary">搜尋</el-button>
    </div>
    <div style="margin-top: 1rem;">
        <iframe id="ytplayer" ref="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?origin=http://example.com"
        frameborder="0"></iframe>
    </div>
    
</template>

<script setup>
    import { ref, getCurrentInstance } from 'vue'
    import { useCommentStore } from '@/store/store'

    
    const { proxy }  = getCurrentInstance();
    

    const videourl = ref("")
    const ytplayer = ref()
    const totalComment = ref([])
    const store = useCommentStore();
    


    function getCommentApi(urlID, pageToken = '') {
        const baseUrl = 'https://youtube.googleapis.com/youtube/v3/commentThreads';
        const params = new URLSearchParams({
            part: 'snippet,replies',
            order: 'time',
            videoId: urlID,
            maxResults: 100,
            key: 'AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U',
            pageToken: pageToken
        });

        const url = `${baseUrl}?${params.toString()}`;

        return proxy.$axios.get(url)
            .then(response => {
                console.log(response.data.items);
                response.data.items.forEach(item => {
                    totalComment.value.push(item.snippet.topLevelComment.snippet)
                    store.commentOri.push(item.snippet.topLevelComment.snippet)
                })
                if (response.data.nextPageToken) {
                    return getCommentApi(urlID, response.data.nextPageToken);
                } else {
                    console.log('No more pages');
                }
                store.comment = store.commentOri
            })
            .catch(error => {
                console.error(error);
                });
    }

    // 搜尋
    const search = function () {
        store.commentOri = []
        // const url = videourl.value
        const url = new URL(videourl.value);

        const params = new URLSearchParams(url.search)
        let urlID
        let youtuUrl = false
        // 判斷YT影片2種網址格式
        if (url.hostname === 'www.youtube.com') {
            urlID = params.get('v')
            youtuUrl = true
        } else if (url.hostname === 'youtu.be') {
            urlID = url.pathname.substr(1)
            youtuUrl = true
        } else {
            alert('網址錯誤')
        }

        if (youtuUrl) {
            store.doSearch = true
            ytplayer.value.src = `https://www.youtube.com/embed/${urlID}?origin=http://example.com`
            // 影片摘要
            proxy.$axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${urlID}&key=AIzaSyCcMVAH6QQPVJ90bCzkWnPMljn3_-FsQ4U`)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
            // 影片留言
            getCommentApi(urlID)

                // https://www.youtube.com/watch?v=bW5lYQ3qj1E

        }
    }
    
</script>

<style lang="scss" scoped>

</style>