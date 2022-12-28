
<template>
  <div v-show="store.res" class="pagination">
    <button @click="prev" :disabled="pageValue == 1" > <font-awesome-icon icon="fa-solid fa-chevron-left"/> Prev </button>
    <form @submit.prevent="submitPage" >
      <input v-model="pageValue" />
    </form>
    <button @click="next" > Next <font-awesome-icon icon="fa-solid fa-chevron-right"/></button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { movieData } from '../stores/movieData.js';
  const store = movieData();
  const pageValue = ref(1)
  const key = import.meta.env.VITE_OMDB_API;
  const submitPage = () => {
    store.movies = [];
    store.page(store.currentTitle, pageValue.value, key);
  }
  const prev = () => {
    pageValue.value--;
    store.movies = [];
    store.page(store.currentTitle, pageValue.value, key);
  }
  const next = () => {
    pageValue.value++;
    store.movies = [];
    store.page(store.currentTitle, pageValue.value, key);
  }
</script>

<style lang="scss" scoped>
  .pagination {
    width: 100%; display: flex; gap: 1rem;
    align-items: center; justify-content: center;
  }
  button {
    padding: .3rem .5rem; font-weight: 700;
    cursor: pointer;
  }
  form {
    padding: .5rem; border-bottom: 1px solid #ffff00;
    display: flex; align-items: center;
    justify-content: center;
    input {
      display: flex; align-items: center;
      justify-content: center;
      width: 50px;
      color: #ffff00; font-weight: 700;
      font-size: 1.2em;
      border: none; outline: none;
      background-color: transparent;
    }
  }
</style>
