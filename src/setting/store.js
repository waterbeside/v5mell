import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}
//actions
const actions = {
  increment ({commit}) {
      commit('INCREMENT')
  },
  decrement ({commit}) {
      commit('DECREMENT')
  }
}

//test
const getters = {
  getCount (state) {
    return state.count
  }
}


// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
