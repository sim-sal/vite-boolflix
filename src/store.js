import { reactive } from 'vue'

export const store = reactive({
    apiFilmsURL: "https://api.themoviedb.org/3/search/movie?api_key=7794d963be19d5da8c2047cf7b201b6b&query=",
    searchFilms: "",
    filmList: [],
    loading: true
})