import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL='https://sistemaweb20190609121605.azurewebsites.net/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
