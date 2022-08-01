import { createApp } from 'vue'
import {createPinia} from "pinia";
import '../index.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faPen,faX } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faPen,faX)

const  app= createApp(App)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')