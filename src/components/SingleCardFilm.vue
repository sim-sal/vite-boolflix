<script>
import { store } from '../store'
import LanguageFlags from './LanguageFlags.vue'
import StarRating from './StarRating.vue'

export default {
    name: 'SingleCardFilm',
    components: {
        LanguageFlags,
        StarRating
    },
    data() {
        return {
            store,
        }
    },
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- card film di esempio -->
    <div class="card text-center">

        <!-- copertina -->
        <div class="poster_film">
            <img :src="`https://image.tmdb.org/t/p/w342${details.poster_path}`" alt="">
        </div>

        <!-- dettagli film -->
        <div class="deatils_film">
            <!-- titolo -->
            <span>Titolo:</span>
            <h4>{{ details.title }} {{ details.name }}</h4>
            <!-- titolo originale -->
            <span>Titolo originale:</span>
            <h6>{{ details.original_title }} {{ details.original_name }}</h6>
            <!-- lingua -->
            <LanguageFlags :filmLanguage="details.original_language" />
            <!-- voto -->
            <span>Rating:</span>
            <StarRating :voteValue="Math.ceil(details.vote_average / 2)" />
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.card {

    background-color: black;
    color: white;

    span {
        color: rgb(145, 145, 145);
    }

    .deatils_film {
        display: none;
    }

    &:hover {

        cursor: pointer;

        .deatils_film {
            display: block;
        }

        .poster_film {
            display: none;
        }

    }
}
</style>