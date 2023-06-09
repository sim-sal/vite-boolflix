import { reactive } from 'vue'

export const store = reactive({
    apiFilmsURL: "https://api.themoviedb.org/3/search/movie?api_key=7794d963be19d5da8c2047cf7b201b6b&query=",
    apiSerieURL: "https://api.themoviedb.org/3/search/tv?api_key=7794d963be19d5da8c2047cf7b201b6b&language=it_IT&query=",
    searchFilms: "",
    filmList: [],
    serieTvList: [],
    languageList: ["it", "en", "fr", "de", "es"],
    voteValue: [1, 2, 3, 4, 5],
    loading: true
})