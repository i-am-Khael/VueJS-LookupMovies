
<template>
  <div v-show="!store.res" >
    <h1>Movie Not Found.</h1>
    <span>just search another movie..</span>
  </div>
</template>

<script setup>
  import { movieData } from '../stores/movieData.js';
  const store = movieData();
</script>

<style lang="scss" scoped>
  div {
    width: 100%; height: 65vh; gap: .3rem;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
  }
  h1 {
    color: #ffff00;
  }
</style>