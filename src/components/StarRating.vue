<script>
import { store } from '../store'

export default {
    name: 'StarRating',
    data() {
        return {
            store,
        }
    },
    props: {
        voteValue: Number
    }
}
</script>

<template>
    <div v-if="store.voteValue.includes(voteValue)">
        <img class="my_star_value" :src="`/${voteValue}.png`" alt="">
    </div>

    <div v-else class="pt-2">
        <img class="my_star_value" src="/0.png" alt="">
    </div>
</template>

<style scoped lang="scss">
.my_star_value {
    max-width: 60%;
}
</style>