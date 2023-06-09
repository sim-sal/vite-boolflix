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

      let myFilmUrl = store.apiFilmsURL;
      let mySerieUrl = store.apiSerieURL;

      if (store.searchFilms !== "") {
        myFilmUrl += `${store.searchFilms}`
        console.log(myFilmUrl);
        mySerieUrl += `${store.searchFilms}`
        console.log(mySerieUrl);
      } else {
        myFilmUrl += ``
        mySerieUrl += ``
      }

      axios.get(myFilmUrl)
        .then(res => {
          store.filmList = res.data.results;
          store.loading = false;
          store.apiFilmsURL += ""
        })
        .catch(err => {
          console.log(err);
        })

      axios.get(mySerieUrl)
        .then(res => {
          store.serieTvList = res.data.results;
          store.loading = false;
          store.apiSerieURL += ""
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
