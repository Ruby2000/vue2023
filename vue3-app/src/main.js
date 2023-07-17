import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// const app = createApp({App})
// const app = createApp(App)


//DOM中的根组件模板,当根组件没有设置 template 选项时，Vue 将自动使用容器的 innerHTML 作为模板。
// DOM 内模板通常用于无构建步骤的 Vue 应用程序。它们也可以与服务器端框架一起使用，其中根模板可能是由服务器动态生成的。
// const app = createApp({
//     data() {
//         return{
//             count:0
//         }
//     }
// })
//
// app.mount('#app')
//多应用实例
// const app1 =createApp({
//
// })
// app1.mount('#container-1')
// const app2 = createApp({
//
// })
// app2.mount('#container-2')