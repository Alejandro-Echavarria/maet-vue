import { createStore } from 'vuex'

import moduleUser from './modules/moduleUser';
import moduleCounter from './modules/moduleCounter';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: moduleUser,
    counter: moduleCounter
  }
})
