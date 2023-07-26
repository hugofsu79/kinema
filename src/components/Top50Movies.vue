<template>
    <h1>Top 50</h1>
    <MoviesList v-bind:movies="Top50Movies" />
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
            Top50Movies: null,
            error: false // error : en cas de problème lors de l'appel API
        }
    },

    name: 'Top50Movies',
    created() {
        //premier then(res => {})
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&page=&sort_by=vote_average.desc")
            .then(res => {
                this.Top50Movies = res.data.results
                console.log(this.Top50Movies)

                // deuxième then(res => {})
                axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&page=2&sort_by=vote_average.desc")
                    .then(res => {
                        this.Top50Movies = this.Top50Movies.concat(res.data.results)

                        // troisième then(res => {})
                        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=a5087ee297fbc59075d15615744b267d&language=fr&vote_count.gte=10000&page=3&sort_by=vote_average.desc")
                            .then(res => {
                                this.Top50Movies = this.Top50Movies.concat(res.data.results)
                                this.Top50Movies = this.Top50Movies.slice(0, 50)
                            })
                            //troisième first then(res => {})
                            .catch(() => this.error = true)


                    })
                    //fin deuxième first then(res => {})
                    .catch(() => this.error = true)
            })
            //fin first then(res => {})
            .catch(() => this.error = true)
    },
}

</script>

