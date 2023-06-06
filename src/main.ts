import { createApp } from 'vue'
import router from './router'
import './style.css'
import 'virtual:uno.css'
import App from './App.vue'

const app = createApp(App);

app.use(router);

app.mount('#app');