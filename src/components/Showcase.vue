<template>
    <ul class="showcase">
      <li
        class="card"
        v-for="card in data"
        v-bind:key="card.uid"
      >
        <img
          class="card__image" 
          src="https://cdn1.ozone.ru/s3/multimedia-l/6050627109.jpg"
        >
        <p>{{ card.dish}}</p>
        <p>{{ card.price }} руб</p>
        <button
          class="card__button"
          @click="addBasket(card)"
        >
          Добавить
        </button>
      </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['data', 'basket']),
  },
  methods: {
    addBasket(card) {
      this.$store.commit('writeBasket', card);
    },
  }
}
</script>

<style scoped>
.showcase {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1440px;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 480px;
  margin: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, .1);
  border-radius: 10px;
}
.card__image {
  height: 330px;
  border-radius: 10px;
}
.card__button {
  height: 30px;
  width: 120px;
  background: rgb(0, 110, 255);
  color: rgb(255, 255, 255);
  font-weight: 700;
  border: none;
  border-radius: 2px;
}
.card__button:hover {
  cursor: pointer;
}
.card__button:active {
  background: rgb(0, 128, 0);
}
</style>