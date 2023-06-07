<script>
export default {
    name: 'SingleCharacter',
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- card film di esempio -->
    <div class="card text-center">
        <!-- <img :src="details.card_images[0].image_url" alt="card-img"> -->
        <h4>{{ details.name }}</h4>
        <div v-if="details.archetype">{{ details.archetype }}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
</style>