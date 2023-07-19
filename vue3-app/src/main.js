import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式


const  app = createApp(App)


app.use(ElementPlus)
app.mount('#app')