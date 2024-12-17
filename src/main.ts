import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

console.log(app)

app.config.errorHandler = (err, vm, info) => {
  console.log('errorHandler', err, vm, info)
}

app.config.globalProperties.msg = 'hello'

app.mount('#app')
