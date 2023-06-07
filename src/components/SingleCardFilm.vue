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
        <!-- <img :src="details.card_images[0].image_url" alt="card-img"> -->
        <h4></h4>
        <div></div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
</style>