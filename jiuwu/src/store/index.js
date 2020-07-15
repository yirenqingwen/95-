import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabBar_show:true
  },
  mutations: {
    change(state,value){
      state.tabBar_show=value
    }
  },
  actions: {
  },
  modules: {
  }
})
