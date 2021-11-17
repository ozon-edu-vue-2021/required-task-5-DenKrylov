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
        <p>{{ position.dish }}</p>
        <p>{{ position.price }}</p>
        <div class="position__number">
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
          <p>{{ position.number * position.price}}</p>
        </div>
      </li>
    </ul>
    <div>{{ total }} руб</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['basket', 'total']),
  },
  methods: {
    incNumber(uid) {
      this.$store.commit('incNumber', uid);
    },
    decNumber(uid) {
      this.$store.commit('decNumber', uid);
    },
	  decreaseNumber(pos) {
		  if(pos.number > 0) {
			  pos.number--;
		  }
	  },
	  increaseNumber(pos) {
		  if(pos.number < 100) {
			 pos.number++;
		  }
	  }
  }
}
</script>

<style scoped>
.basket {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: rgba(0, 0, 0, .1);
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