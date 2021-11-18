<template>
	<div class="basket">
    <ul>
      <li
        class="position"
        v-for="position in basket"
        v-bind:key="position.uid"
      >
        <img 
          class="position__image"
          src="https://cdn1.ozone.ru/s3/multimedia-l/6050627109.jpg"
        >
        <p class="position__dish">{{ position.dish }}</p>
        <p>{{ position.price }} руб</p>
        <div class="position__number">
          <div class="position__changeNumber">
            <button
              class="position__button"
              @click="decNumber(position.uid)"
            >
              -
            </button>
            <p>{{ position.number }}</p>
            <button
              class="position__button"
              @click="incNumber(position.uid)"
            >
              +
            </button>
          </div>
          <p>{{ position.number * position.price}}</p>
        </div>
      </li>
    </ul>
    <button
      class="basket__button"
      @click="buy()"
    >
      Оформить за {{ getTotalPrice }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['basket', 'total']),
    ...mapGetters(['getTotalPrice'])
  },
  methods: {
    incNumber(uid) {
      this.$store.commit('incNumber', uid);
    },
    decNumber(uid) {
      this.$store.commit('decNumber', uid);
    },
    buy() {
      let fulSum = "";
      for(let i = 0; i < this.basket.length; i++) {
        fulSum +=
        "Позиция " + (i + 1) +
        "\nНаименование - " + this.basket[i].dish +
        "\nЦена за шт - " + this.basket[i].price + " руб" +
        "\nКолличество - " + this.basket[i].number + " шт" +
        "\nЦена за все - " +(this.basket[i].price * this.basket[i].number) + " руб" +
        "\n\n";
      }
      alert(fulSum + "\n" + "Сумма покупки - " +this.total);
    }
  }
}
</script>

<style scoped>
.basket {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.basket__button {
  margin-top: 20px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: rgb(255,255,255);
  background: rgba(0, 0, 0, .3);
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 10px;
  cursor: pointer;
}
.position {
	display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, .1);
	height: 200px;
	width: 1360px;
}
.position__image {
  margin-left: 50px;
  height: 150px;
}
.position__dish {
  width: 700px;
}
.position__changeNumber {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
}
.position__number {
  margin-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
.position__button {
  height: 40px;
  width: 40px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 30px;
  background: rgba(0, 0, 0, .1);
  color: rgb(255,255,255);
  cursor: pointer;
}
</style>