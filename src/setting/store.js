import Vue from 'vue'
import Vuex from 'vuex'
import config from './config'
Vue.use(Vuex)

// 应用初始状态
const state = {
    title: '5MELL',
    headGo : 0
}
// 定义所需的 mutations
const mutations = {
    resetTitle (state) {
      state.title = config.appTitle;
    },
    setTitle (state,title) {
      state.title = title;
    },
    setGo (state,go) {
      state.headGo = go;
    }

}
//actions
const actions = {

}

//test
const getters = {
  
}


// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
