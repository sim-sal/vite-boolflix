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

        <div class="waiting_message" v-if="store.filmList.length === 0 && store.serieTvList.length === 0">
            <h1>...In attesa di ricerca...</h1>
        </div>

        <div class="movies" v-if="(store.filmList.length > 0)">
            <h2>MOVIES:</h2>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <SingleCardFilm v-for="film in store.filmList" :details="film" class="col-md-6 ms-md-6" :key="film.id" />
            </div>
        </div>

        <div class="serie_tv" v-if="(store.serieTvList.length > 0)">
            <h2>SERIE TV:</h2>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <SingleCardFilm v-for="film in store.serieTvList" :details="film" class="col-md-6 ms-md-6" :key="film.id" />
            </div>
        </div>


    </section>
</template>

<style scoped lang="scss">
.container {
    .waiting_message {
        height: 88.8vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1,
    h2 {
        color: white;
    }

    .movies,
    .serie_tv {
        margin-top: 100px;
    }

    .serie_tv {
        margin-bottom: 100px;
    }
}
</style>