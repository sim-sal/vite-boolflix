<script>
export default {
    name: 'SingleCardFilm',
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- card film di esempio -->
    <div class="card text-center">
        <!-- dobbiamo stampare:
            -Titolo
            -Titolo Originale
            -Lingua
            -Voto -->

        <h5>{{ details.title }}</h5>
        <h5>{{ details.original_title }}</h5>
        <h5>{{ details.original_language }}</h5>
        <h5>{{ details.vote_average }}</h5>

    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
</style>