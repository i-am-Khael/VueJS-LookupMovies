
<template>
  <section>
    <div class="container">
      <div class="cards-container">
        <MovieNotFound/>
        <MoviesCard/>
      </div>
      <Pagination/>
    </div>
  </section>
</template>

<script setup>
  import { movieData } from '../stores/movieData.js';
  import MovieNotFound from '../components/MovieNotFound.vue';
  import MoviesCard from '../components/Cards/MoviesCard.vue'
  import Pagination from '../components/Pagination.vue';
import { storeToRefs } from 'pinia';
  const store = movieData();
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh; color: var(--color-0);
  background-color: var(--color-2);
}
.container {
  padding: 5rem 0;
}
.cards-container {
  width: 100%; height: 100%;
  display: flex; align-items: center;
  justify-content: center; flex-wrap: wrap;
  gap: 1.5rem; margin: 2rem 0;
}
</style>
