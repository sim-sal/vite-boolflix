<script>
import { store } from '../store'

export default {
    name: 'LanguageFlags',
    props: {
        filmLanguage: String
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div v-if="store.languageList.includes(filmLanguage)" class="d-flex pt-2">
        <h5>Lingua:</h5>
        <img class="my_flag" :src="`../assets/${filmLanguage}.png`" alt="">
    </div>
    <div v-else class="pt-2">
        <h5>Lingua: </h5>
        <p class="fs-5">{{ filmLanguage.toUpperCase() }}</p>
    </div>
</template>

<style scoped lang="scss"></style>