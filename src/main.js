import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// const notivue = createNotivue({
//   position: 'top-right',
//   limit: 4,
//   enqueue: true,
//   avoidDuplicates: true,
//   notifications: {
//     global: {
//       duration: 10000
//     }
//   }
// })

// app.use(notivue)
app.use(pinia)
app.use(router)

app.mount('#app')