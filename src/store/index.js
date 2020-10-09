import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
// import plugins from './plugins'

Vue.use(Vuex)

console.log(STORAGE_KEY)

export default new Vuex.Store({
  state: {

  },
  actions,
  mutations,
  // plugins
})