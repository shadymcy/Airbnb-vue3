// 解决找不到模块“xxx.vue”或其相应的类型声明问题:在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        // hidden 是否需要展示该路由是否渲染该路由入口
        hidden:true,
        redirect:'/home'
    },
    {
        path:'/home',
        name:'Home',
        component: () => import('../views/home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router