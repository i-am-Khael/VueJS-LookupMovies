
<template>
  <section>
    <div class="container">
      <MovieCard/>
    </div>
  </section>
</template>

<script setup>
  import MovieCard from '../components/Cards/MovieCard.vue';
</script>

<style lang="scss" scoped>
  section {
    background-color: var(--color-2);
    .container {
      min-height: 100vh; padding: 5rem 0;
    }
  }
</style>
