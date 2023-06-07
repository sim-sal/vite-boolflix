<script>
import { store } from '../store'

export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand"><strong>BOOLFLIX</strong></a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Cerca film" aria-label="Search"
                    v-model="store.searchFilms">
                <button class="btn btn-outline-success" type="submit" @click="$emit('mysearch')">Cerca</button>
            </form>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    padding-top: 0;

    .container-fluid {
        background-color: rgb(48, 48, 48);

        a {
            color: red;
            font-size: 50px;
        }

        .d-flex {
            button {
                background-color: white;
                color: black;

                &:hover {
                    background-color: red;
                    color: white;
                }
            }
        }
    }

}
</style>