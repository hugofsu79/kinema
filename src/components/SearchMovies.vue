<template>
    <body>
        <div class="container d-flex flex-column align-items-center">
            <h1>Recherche un film</h1>
            <input class="border mt-3" v-model="query" @keyup="searchMovies()">
            <MoviesList :movies="movies" />
        </div>


    </body>
</template>

<script>
import axios from 'axios';
import MoviesList from './utils/MoviesList.vue';

export default {

    name: "SearchMovies",

    components: {
        MoviesList
    },

    data() {
        return {
            query: "",
            movies: []
        }
    },
    methods: {
        searchMovies() {
            axios.get('https://api.themoviedb.org/3/search/movie?query=' + this.query + '&api_key=e4593b61307460771ee08604391c22e4&language=fr&sort_by=popularity.desc&page=1')
                .then(response => {
                    this.movies = response.data.results
                    console.log(this.movies)
                })
        }
    }
}
</script>