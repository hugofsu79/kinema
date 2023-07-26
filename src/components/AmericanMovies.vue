<template>
    <h1>Films Americain</h1>
    <MoviesList v-bind:movies="americanMovies" />
</template>


<script>

import MoviesList from "./utils/MoviesList.vue";
import axios from "axios"

export default {
    components: {
        MoviesList
    },

    data() { //LES variables dispo dans mon composant
        return { // elles vont contenir les films récupéré par l'appel API
            americanMovies: null,
            error: false // error : en cas de problème lors de l'appel API
        }
    },

    name: 'AmericanMovies',

    created() {
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&certification_country=us&sort_by=primary_release_date.desc&page=1&vote_count.gte=1000")
            .then(res => {
                this.americanMovies = res.data.results // Je stock mes films récupérés dans la variable movies des datas (console -> Proxy)
                console.log(this.americanMovies)
            })

            .catch(() => this.error = true)
    },
}

</script>
