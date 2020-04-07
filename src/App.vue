<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },

  async mounted () {
    try {
      const { data } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      this.movieList = data.data.movies;
      console.log(this.movieList);
    }

    catch (error) {
      throw error;
    }
  },

  data () {
    return {
      movieList: []
    }
  },
};
</script>

<template>
  <div class ="MovieList">
    <div class ="MovieList-TopTitle">Welcome To My Movie App!</div>
    <div v-for="({ title, summary, id, rating, year, language, runtime, genres, medium_cover_image }) in movieList" :key="id">
      <div class ="MovieList-Card">
        <div class ="MovieList-Title">
          {{ title }}
          <span class ="MovieList-Runtime">{{ runtime }}
            <img src = "./assets/clock.png" alt ="clock" class ="MovieList-RuntimeImage" />
          </span>
        </div>

      <div class ="MovieList-Genre">
        <span>Genres: &nbsp;&nbsp;</span>
        <span style ="margin-right: 20px" v-for="(values, index) in genres" :key="index">{{ values }}</span>
      </div>

        <div class ="MovieList-Summary">{{ summary.substring(0, 300) }}</div>
        <img :src = "medium_cover_image" :alt ="title" :title ="title" class ="MovieList-Poster" @click = "window.location ='http://www.naver.com' "/>

      </div>
    </div>
  </div>
</template>

<style lang ="scss">
  .MovieList {
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045) fixed;

    &-TopTitle {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }

    &-Card {
      width: 50%;
      margin: 0 auto;
      margin-top: 2.5%;
      outline: none;
      overflow: auto;
      background: linear-gradient(#4776E6, #8E54E9);

      &:hover {
        background: linear-gradient(to right, #E6DADA, #274046);
        cursor: pointer;
      }
    }

    &-Runtime {
      color: #f9ca24;
      font-size: 1.5rem;
      display: inline-block;
    }

    &-RuntimeImage {
      width: 20px;
      height: 20px;
    }

    &-Title {
      margin-bottom: 10px;
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
    }

    &-Genre {
      text-align: center;
    }

    &-Summary {
      text-align: center;
      font-size: 1.25rem;
    }

    &-Poster {
      display: block;
      margin: 0 auto;
      z-index: 2;
    }
  }
</style>