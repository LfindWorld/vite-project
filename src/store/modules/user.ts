import { Commit } from 'vuex'
export interface UserModuleTypes {
  count: number
}
const state = {
  count: 0
}
const mutations = {
  increment: (state: UserModuleTypes): void => {
    state.count++
  }
}
const actions = {
  addCount: (context: { commit: Commit }): void => {
    context.commit('increment')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
