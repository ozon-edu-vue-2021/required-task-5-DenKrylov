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
    writeData: (state, res) => {
      state.data = res;
    },
    writeBasket: (state, card) => {
      for(let i = 0; i < state.basket.length; i++) {
        if(card.uid === state.basket[i].uid) {
          state.basket[i].number += 1;
          return;
        }
      }
      card.number = 1;
      state.basket.push(card);
    }
  }
});
