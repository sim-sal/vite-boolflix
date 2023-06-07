<script>
import { store } from './store'
import axios from 'axios'
import AppSearch from './components/AppSearch.vue'

export default {
  components: {
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  created() {

  }
} 
</script>



<template>
  <header>
    <AppSearch />
  </header>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
