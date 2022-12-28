
<template>
  <div class="backBtn">
    <button @click="router.back()" > <font-awesome-icon icon="fa-solid fa-chevron-left" /> back </button>
  </div>
  <div class="card">
    <div class="img-container">
      <img v-if="store.movieDatas.Poster == 'N/A'" src="../../assets/imgs/no-image-available.png" alt="No image available">
      <img :src="store.movieDatas.Poster" :alt="store.movieDatas.Title">
    </div>
    <div class="movie-info">
      <ul>
        <li>Title: <span>{{ store.movieDatas.Title }}</span></li>
        <li>Date Released: <span>{{ store.movieDatas.Released }}</span></li>
        <li>Genre: <span>{{ store.movieDatas.Genre }}</span></li>
        <li>Rated: <span>{{ store.movieDatas.Rated }}</span></li>
        <li>Duration: <span>{{ store.movieDatas.Duration }}</span></li>
        <ul>
          <li v-for="rating in store.movieDatas.Ratings" >{{ rating.Source }}: <span>{{ rating.Value }}</span> </li>
        </ul>
      </ul>
      <div class="plot">
        <label>Plot</label>
        <p>
          {{ store.movieDatas.Plot }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { movieData } from '../../stores/movieData.js';
  const router = useRouter();
  const store = movieData();
</script>

<style lang="scss" scoped>
  .card {
    max-width: 700px; margin: 1rem auto;
    box-shadow: 2px 2px 10px 1px #000;
    border-radius: .6rem; overflow: hidden;
    display: flex; padding: 1rem;
  }
  img-container {
    max-width: 300px; max-height: 456px;
    img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
  .movie-info {
    max-width: 450px;
    padding: 1rem; color: var(--color-0);
    ul {
      display: flex; flex-direction: column;
      gap: .5rem;
    }
    li, label {
      color: #ffff00; text-transform: uppercase;
      font-weight: 700;
      span {
        color: var(--color-0); font-weight: 400;
        text-transform: none;
      }
    }
    .plot {
      margin-top: .5rem;
      p {
        padding: .5rem 0;
      }
    }
  }

  .backBtn {
    margin: 1rem 0 0 0; display: flex;
    align-items: center; justify-content: flex-end;
    button {
      padding: .5rem; outline: none;
      background-color: transparent;
      border: 1px solid var(--color-0);
      color: var(--color-0);
      border-radius: .5rem;
      cursor: pointer; transition: all .8s ease-in-out;
      &:hover {
        transform: translateX(-15px);
        color: #ffff00; border-color: #ffff00;
      }
    }
  }

  @media (max-width: 720px) {
    .card {
      flex-direction: column;
    }
    .backBtn {
      margin-top: 3rem;
    }
  }
</style>
