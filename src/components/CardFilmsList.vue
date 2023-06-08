<script>
import { store } from '../store'

import SingleCardFilm from './SingleCardFilm.vue';

export default {
    name: 'CharactersList',
    components: {
        SingleCardFilm
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">

        <div v-if="(store.filmList.length === 0)">
            <h1 class="text-center">...In attesa di ricerca...</h1>
        </div>

        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <SingleCardFilm v-for="film in store.filmList" :details="film" class="col-md-6 ms-md-6" :key="film.id" />
        </div>

    </section>
</template>

<style scoped lang="scss"></style>