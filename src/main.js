import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'
import JwPagination from 'jw-vue-pagination';


axios.defaults.baseURL = 'http://localhost:8000/api'

// Vue.config.productionTip = false

const app = createApp(App)

app.use(store)
app.use(router)
app.component('jw-pagination', JwPagination);

app.mount('#app')
// createApp(App).use(router,store).mount('#app')

