// 解决找不到模块“xxx.vue”或其相应的类型声明问题:在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件

/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  declare module '*.scss'
  
  declare module '*.webp'
  