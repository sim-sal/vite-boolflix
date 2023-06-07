<script>
import { store } from '../store'

export default {
    name: "AppSearch",
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand"><strong>BOOLFLIX</strong></a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
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