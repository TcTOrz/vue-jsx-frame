import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/lodash.js'

Vue.config.productionTip = false

// import jsonData from '@//assets/routeDirec.json' 
// console.log(jsonData)
Vue.component('navbar-component', {
  render() {
    return (
      <div>
        <h1>hello</h1>world
      </div>
    )
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
