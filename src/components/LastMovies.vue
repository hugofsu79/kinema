<template>
    <h1>Les Films de 2023</h1>
    <MoviesList v-bind:movies="LastMovies" />
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
            LastMovies: null,
            error: false // error : en cas de problème lors de l'appel API
        }
    },

    name: 'LastMovies',
    created() {
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&include_adult=false&page=1&primary_release_year=2023")
            .then(res => {
                this.LastMovies = res.data.results
                console.log(this.LastMovies)
            })

            .catch(() => this.error = true)
    },
}

</script>
