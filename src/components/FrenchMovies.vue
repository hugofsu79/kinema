<template>
    <h1>Films Français</h1>
    <MoviesList v-bind:movies="FrenchMovies" />
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
            FrenchMovies: null,
            error: false // error : en cas de problème lors de l'appel API
        }
    },

    name: 'FrenchMovies',

    created() {
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&with_original_language=fr&include_adult=false&vote_count.gte=1000&page=1")
            .then(res => {
                this.FrenchMovies = res.data.results // Je stock mes films récupérés dans la variable movies des datas (console -> Proxy)
                console.log(this.FrenchMovies)
            })

            .catch(() => this.error = true)
    },
}

</script>
