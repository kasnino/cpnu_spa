import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'vue-material-design-icons/styles.css';


Vue.config.productionTip = false

import header from '@/components/Header'
Vue.component("header-app", header);

import SubHeader from '@/components/SubHeader'
Vue.component("SubHeader-app", SubHeader);

import footer from '@/components/Footer'
Vue.component("footer-app", footer);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
