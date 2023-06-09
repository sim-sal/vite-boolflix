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
    <div class="main-container">
      <CardFilmsList />
    </div>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

.main-container {
  background-color: rgb(26, 26, 26);
  height: 88.8vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #858585;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
  }
}
</style>
