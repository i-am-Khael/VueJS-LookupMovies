
<template>
  <footer>
    <div class="container">
      <div class="links">
        <a href="https://michaelcasals.ml/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="fa-solid fa-globe"/>
        </a>
        <a href="https://" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="fa-brands fa-github"/>
        </a>
      </div>
      <div class="brand">
        <h2>lookupMovies &MediumSpace; <span>&copy; 2022</span></h2>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  footer {
    width: 100%; padding: 1.3rem 0;
    background-color: var(--color-3);
  }
  .container {
    display: flex; align-items: center;
    justify-content: space-between;
  }
  .links {
    display: flex; gap: 1rem;
    a {
      font-size: 1.5em; color: #ffff00;
    }
  }
  h2 {
    color: #ffff00; font-size: 1em;
    font-family: var(--kaushan-script);
    span {
      font-family: var(--roboto);
    }
  }
</style>
