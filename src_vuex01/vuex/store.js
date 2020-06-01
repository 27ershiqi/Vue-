import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    cound:0
}

const mutations = {
  increment(state) {
    state.cound++
  },
  decrement(state){
      state.cound--
  },
};

const actions = {
//   increment(context) {
//     context.commit("increment")
//   },
//   decrement(context) {
//     context.commit("decrement")
//   },
  IncrementIfOdd(context) {
    if (context.state.cound % 2 === 1) {
      context.commit("increment")
    }
  },
  incrementAsync(context){
      setTimeout(()=>{
          context.commit("increment")
      },1000)
  }
};

const getters = {
    currentCount(state){
        return state.cound * 6
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})