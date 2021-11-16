import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'https://random-data-api.com/api/food/random_food?size=30',
    data: [],
    basket: []
  },
  mutations: {
    writeData(state, str) {
      state.data = str;
    }
  }
});
