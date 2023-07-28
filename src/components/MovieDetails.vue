<template>
    <body>

        <div class="container container_card">
            <div class="row">
                <div class="col">
                    <img v-bind:src="urlDeBase + movie.poster_path" class="img-fluid_card" alt="poster_du_film">
                </div>
                <div class="col">
                    <div class="text_card">
                        <div class="row">
                            <h2 class="title_card">{{ movie.original_title }}</h2>
                            <p class="card-text"><i class="fa-regular fa-star" style="color: #f5ec00;"></i> {{ Math.round(movie.vote_average * 10) / 10 }}</p>
                            <h5 class="card-text mb-2">À partir du {{ formatDate(movie.release_date) }} en salle</h5>
                        </div>
                        <span v-for="genre in movie.genres" :key="genre.id"
                            class="badge bg-badge rounded-pill text-bg-light">{{
                                genre.name }}</span>
                        <p>
                            <b>Langue originale : </b>
                            <span v-if="movie.original_language == 'fr'"> français </span>
                            <span v-else-if="movie.original_language == 'en'"> anglais </span>
                            <span v-else>{{ movie.original_language }}</span>
                        </p>


                        <h4 class="card-text m-2">Synopsis</h4>
                        <p class="card-text m-2 mb-4">{{ movie.overview }}</p>
                    </div>
                    <!-- video -->
                    <div id="trailer" v-if="video[0]">
                        <iframe class="video_card" width="650" height="300"
                            v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>


        </div>
    </body>
</template>

<script>



//import d'axios pour pouvoir faire des appels API
import axios from "axios"
import moment from 'moment'

moment.locale('fr');


export default {
    name: "App",



    methods: {

        formatDate(value) {
            return moment(value).format('Do MMMM YYYY');
        }
    },

    data() {

        return {
            movie: [],
            movieId: this.$route.params.id,
            urlDeBase: "https://image.tmdb.org/t/p/original/",
            video: [],
        }

    },
    props: ["movies"],

    created() {


        axios
            .get(
                "https://api.themoviedb.org/3/movie/" + this.movieId + "?api_key=2c972f2ea32ef4add995d515d4567f25&language=fr",
            )


            .then(res => {
                // console.log(res.data.results)
                this.movie = res.data
                console.log(this.movie)
            })

            .catch(() => this.error = true)

        axios
            .get(
                "https://api.themoviedb.org/3/movie/" + this.movieId + "/videos?api_key=e4593b61307460771ee08604391c22e4&language=fr"
            )
            .then((response) => {
                this.video = response.data.results;
                console.log(this.video);
            });

    }
}


</script>