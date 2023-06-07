<script>
import { store } from './store'
import axios from 'axios'
import AppSearch from './components/AppSearch.vue'
import SingleCardFilm from './components/SingleCardFilm.vue'
import CardFilmsList from './components/CardFilmsList.vue'

export default {
  components: {
    AppSearch,
    SingleCardFilm,
    CardFilmsList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCardFilms() {

      let myUrl = store.apiFilmsURL;

      if (store.searchFilms !== "") {
        myUrl += `${store.searchFilms}`
        console.log(myUrl);
      } else {
        myUrl += ``
      }

      axios.get(myUrl)
        .then(res => {
          store.filmList = res.data.results;
          store.loading = false;
          store.apiFilmsURL += ""
        })
        .catch(err => {
          console.log(err);
        })

    },

  },
  created() {
    this.getCardFilms();

  }
} 
</script>



<template>
  <header>
    <AppSearch @mysearch="getCardFilms" />
  </header>

  <main>
    <CardFilmsList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
