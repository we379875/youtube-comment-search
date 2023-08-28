import { createApp } from 'vue'
import './style.css'
import './assets/scss/common.scss';
import ElementPlus from 'element-plus'
import zhTW from 'element-plus/dist/locale/zh-tw.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import axios from 'axios';
import router from './router';
import moment from 'moment';


const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus, {
    locale: zhTW,
})
app.config.globalProperties.$axios = axios;
app.config.globalProperties.moment = moment;


app.use(router).use(pinia).mount('#app')
