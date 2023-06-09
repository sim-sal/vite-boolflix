<script>
import { store } from '../store'

export default {
    name: 'LanguageFlags',
    data() {
        return {
            store,
        }
    },
    props: {
        filmLanguage: String
    }
}
</script>

<template>
    <div v-if="store.languageList.includes(filmLanguage)">
        <img class="my_flag" :src="`/${filmLanguage}.png`" alt="">
    </div>
    <div v-else class="pt-2">
        <p class="fs-5">{{ filmLanguage.toUpperCase() }}</p>
    </div>
</template>

<style scoped lang="scss">
.my_flag {
    max-width: 20%;
}
</style>