import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hidshow:true
  },
  getters:{

  },
  mutations: {
    changeShow(state,value){
      state.hidshow=value
    }
  },
  actions: {
  },
  modules: {
  }
})
