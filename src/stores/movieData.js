
import { defineStore } from "pinia";

export const movieData = defineStore({

  id: '',

  state: () => ({

    url: 'https://www.omdbapi.com/?',
    pagination: false,
    currentTitle: '',
    movies: [],
    res: false,
    movieDatas: {}
  }),

  actions: {

    async searchByTitle(title, key){
      try {
        const response = await fetch(`${this.url}s=${title}&apikey=${key}`);
        if(!response.ok){
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        if(data.Response === 'True'){
          data.Search.forEach(movie => {
            this.movies.push(movie);
          });
          this.pagination = true;
          this.res = true;
        } else {
          this.res = false;
        }
      } catch (error) {
        console.log(`An Error occurred: ${error}`);
      }
    },
    
    async page(title, page, key){
      try {
        const response = await fetch(`${this.url}s=${title}&page=${page}&apikey=${key}`);
        if(!response.ok){
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        if( data.Response == 'True' ) {
          data.Search.forEach(movie => {
            this.movies.push(movie);
          })
          this.res = true;
        } else {
          this.res = false;
        }
      } catch (error) {
        console.log(`An Error occurred: ${error}`);
      }
    },

    async movie(id, key){
      try {
        const response = await fetch(`${this.url}i=${id}&apikey=${key}`);
        if(!response.ok){
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        this.movieDatas = data;
      } catch (error) {
        
      }
    }


  },


});
