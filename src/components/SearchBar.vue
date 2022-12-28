
<template>
  <form @submit.prevent="search">
    <div class="search-box">
      <input v-model="searchValue"  type="text" placeholder="Spider Man, Superman, etc..">
      <button><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import { movieData } from '../stores/movieData.js';
  const store = movieData();
  const key = import.meta.env.VITE_OMDB_API;
  const searchValue = ref('');
  const search = () => {
    store.movies = []; store.currentTitle = searchValue.value;
    store.searchByTitle( searchValue.value, key );
    searchValue.value = '';
  }
</script>

<style lang="scss" scoped>
  .search-box {
    padding: .1rem; border-radius: 5rem;
    display: flex; align-items: center;
    justify-content: center;
    border: 1px solid var(--color-3);
    background-color: var(--color-0);
    overflow: hidden;
  }
  input {
    padding: 0 .5rem;
    border: none; outline: none;
  }
  button {
    padding: 0 .5rem;
    color: var(--color-3); font-size: 1.5em;
    border: none; outline: none;
    cursor: pointer;
  }
</style>
