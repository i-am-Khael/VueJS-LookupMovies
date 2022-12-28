
<template>
  <NavBar/>
  <RouterView/>
  <FooterBar/>
</template>

<script setup>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto+Slab:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap');

  :root {
    --color-0: #f5f5f5;
    --color-1: #444444;
    --color-2: #3A2558;
    --color-3: #4E386E;
    --roboto: 'Roboto', sans-serif;
    --roboto-slab: 'Roboto Slab', serif;
    --kaushan-script: 'Kaushan Script', cursive;
  }

  *, *::before, *::after {
    margin: 0; padding: 0; box-sizing: border-box;
  }

  html, body, main {
    width: 100%; height: 100%;
    font-family: var(--roboto); font-size: 1rem;
  }

  section {
    width: 100%; min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--roboto-slab);
  }

  a, li {
    list-style: none; text-decoration: none;
  }

  .container {
    width: 80%; max-width: 1440px;
    margin: 0 auto;
  }

  @media (max-width: 720px) {
    .container {
      width: 90%;
    }
  }

</style>
