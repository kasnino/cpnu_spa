import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import header from '@/components/Header'
import vuetify from './plugins/vuetify';
Vue.component("header-app", header);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
