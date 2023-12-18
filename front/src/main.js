import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue';
import store from './store/index.js';
import App from './App.vue';
import router from './router/index.js';


const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')
