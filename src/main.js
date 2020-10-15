import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/lodash.js'

Vue.config.productionTip = false

import * as Mock from './mock/index.js'
process.env.NODE_ENV === 'development' ?  Mock: ''

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
