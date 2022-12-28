
<template>
  <div @click="data(movie.imdbID)" v-for="movie in store.movies" :key="movie.imdbID" class="movie-card">
    <div class="img-container">
      <img v-if="movie.Poster === 'N/A'" src="../../assets/imgs/no-image-available.png" alt="No Image Available">
      <img v-else :src="movie.Poster" :alt="movie.Title">
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { movieData } from '../../stores/movieData.js';
  const router = useRouter();
  const store = movieData();
  const key = import.meta.env.VITE_OMDB_API;
  const data = paramID => {
    store.movieDatas = [];
    store.movie(paramID, key);
    router.push({ name: 'movie', params: { id: paramID } });
  }

</script>

<style lang="scss" scoped>
  .movie-card {
    padding: 1rem; color: var(--color-0);
    background-color: var(--color-3);
    display: grid; align-items: center;
    justify-content: center; cursor: pointer;
    box-shadow: 2px 2px 10px 1px #000;
    border-radius: .5rem;
    h1 {
      font-size: 1em; text-align: center;
      margin-top: 1rem;
    }
  }
  img {
    width: 300px; height: 456px;
  }
</style>
