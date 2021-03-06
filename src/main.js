import Vue from 'vue'
import App from './App.vue'
// Tailwind css
import './assets/css/tailwind.css';
import router from "./router"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')