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
    getCharacters() {

      let myUrl = store.apiURL;

      if (store.searchArchetypes !== "") {
        myUrl
      }

      axios.get(store.apiURL)
        .then(res => {
          store.charactersList = res.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
        })

    },

  },
  created() {
    this.getCharacters();

  }
} 
</script>



<template>
  <header>
    <AppSearch />
  </header>

  <main>
    <CardFilmsList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
