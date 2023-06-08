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

        <!-- titolo -->
        <h5>{{ details.title }}</h5>
        <!-- titolo originale -->
        <h5>{{ details.original_title }}</h5>
        <!-- lingua -->
        <LanguageFlags :filmLanguage="details.original_language" />
        <!-- voto -->
        <StarRating :voteValue="Math.ceil(details.vote_average / 2)" />


    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
</style>