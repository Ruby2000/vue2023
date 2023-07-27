import { createApp } from 'vue'
import App from './App.vue'
import element from 'element-plus'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(element).use(router).use(store)
app.mount('#app')
