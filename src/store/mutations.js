
import {INCREMENT,  DECREMENT} from './types'
import getters from './getters'

import state from './state'//将元素的状态信息存储起来

const mutations = {
    [INCREMENT](state) {
      state.count++;
    },
    [DECREMENT](state) {
      state.count--;
    }
};

export default {
  state,
  mutations,
  getters
}
