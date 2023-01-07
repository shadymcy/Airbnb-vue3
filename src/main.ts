import { createApp } from 'vue'

import App from './App.vue'
import ArcoVue from '@arco-design/web-vue'
import router from './routers'

import '@arco-design/web-vue/dist/arco.css';
import './assets/scss/index.scss'

//  ID 选择器详解 #app
// app:容器的id
createApp(App).use(ArcoVue).use(router).mount('#app')

