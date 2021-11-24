<template>
  <div id="app">
    <header class="app__header">
      <div class="header__fil">
        <h1
        class="header__head"
        @click="isStore = true"
      >
        Мой магазин
      </h1>
      <button 
        class="header__button"
        @click="transition()">
        <p v-if="isStore">Корзина</p>
        <p v-else>В магазин</p>
      </button>
      </div>
    </header>
    <div class="app__body">
      <Basket v-if="!isStore" />
      <Showcase v-else />
    </div>
  </div>
</template>

<script>
import Showcase from "@/components/Showcase.vue"
import Basket from "@/components/Basket.vue"
import { mapMutations, mapState } from 'vuex';
import axios from 'axios';

export default {
  name: "App",
  created() {
    this.loadData();
  },
  components: {
    Showcase,
    Basket,
  },
  computed: {
    ...mapState(['url', 'data', 'basket', 'total']),
    ...mapMutations(['countPrice'])
  },
  data() {
    return {
      isStore: true,
    }
  },
  methods: {
    transition () {
      this.isStore = !this.isStore;
      this.countPrice;
    },
    async loadData() {
      const res = await axios.get(this.url);
      this.$store.commit('writeData', res.data);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  background: rgb(44, 62, 80);
  display: flex;
  flex-direction: column;
  height: 100%;
  color: rgb(255, 255, 255);
}
.app__header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  background: rgba(0, 0, 0, .3);
  cursor: pointer;
}
.header__fil {
  display: flex;
  justify-content: space-between;
  width: 1500px;
}
.header__button {
  width: 100px;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  background: none;
  border-radius: 10px;
  cursor: pointer;
}
.header__button:hover {
  color: rgb(0, 128, 0);
  border: 1px solid rgb(0, 128, 0);
}
.app__body {
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(0, 0, 0, .1);
}

</style>