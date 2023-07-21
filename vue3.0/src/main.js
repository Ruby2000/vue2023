import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式
const app =createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconVue)){
    app.component(key,component)
}
app.use(ElementPlus)
app.mount('#app')
