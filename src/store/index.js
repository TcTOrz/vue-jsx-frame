import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
// import plugins from './plugins'

Vue.use(Vuex)

const state = {
  STORAGE_KEY: 'rsnmd-vuejs',
  // navbar
  activeIndex: '/0',
  // tabs
  tabsValue: '/0',
  tabs: [{
    title: '首页',
    name: '/0',
    content: ''
  }]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins
})