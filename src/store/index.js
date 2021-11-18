import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: 'https://random-data-api.com/api/food/random_food?size=30',
    data: [],
    basket: [],
    total: 0,
  },
  getters: {
    getTotalPrice: (state) => {
      state.total = 0;
      for(let i = 0; i < state.basket.length; i++) {
        state.total += state.basket[i].price * state.basket[i].number;
      }
      return state.total;
    }
  },
  mutations: {
    writeData: (state, res) => {
      state.data = res;
      for(let i = 0; i < state.data.length; i++) {
        state.data[i].price = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        state.data[i].urlImg =  "assets/images/" + 
          (Math.floor(Math.random() * (12 - 1 + 1)) + 1) +
          ".webp";
      }
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
    },
    incNumber: (state, uid) => {
      state.total = 0;
      for(let i = 0; i < state.basket.length; i++) {
        if(uid === state.basket[i].uid &&
          state.basket[i].number < 100 ) {
            state.basket[i].number++;
          }
          state.total += state.basket[i].number * state.basket[i].price;
      }
    },
    decNumber: (state, uid) => {
      state.total = 0;
      for(let i = 0; i < state.basket.length; i++) {
        if(state.basket[i].uid === uid &&
          state.basket[i].number > 0 ) {
          state.basket[i].number--;
        }
        state.total += state.basket[i].number * state.basket[i].price;
      }
    },
  }
});
