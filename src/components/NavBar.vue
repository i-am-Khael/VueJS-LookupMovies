
<template>
  <nav>
    <div class="container">
      <RouterLink :to="{ name: 'home' }" >
        <h1>lookupMovies</h1>
      </RouterLink>
      <SearchBar/>
    </div>
  </nav>
</template>

<script setup>
  import SearchBar from './SearchBar.vue';
</script>

<style lang="scss" scoped>
  nav {
    width: 100%; padding: .6rem 0;
    background-color: var(--color-3);
    position: fixed; z-index: 10;
    box-shadow: 0 0 10px 1px #000;
    a h1 {
      font-family: var(--kaushan-script);
      color: #ffff00;
    }
  }
  .container {
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 1rem;
  }
</style>
