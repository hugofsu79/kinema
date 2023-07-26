<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->
    <div class="container-fluid">
        <div class="row">

            <!-- <div v-for="(movie, index) in movies" v-bind:key="movie.id" class="col-sm-6 col-md-4 col-lg-4 p-3"> -->
            <!-- v-bind : prop attendue = valeur (mon alias du v-for) -->
            <div v-for="(movie, index) in movies " v-bind:key="movie.id" class="col-sm-6 col-md-4 col-lg-4 p-3">
                <!-- v-bind : prop attendue = valeur -->
                <MovieCard v-bind:movie="movie" v-bind:index="index" />
                <!-- en fonctioon php ca donnerait ça-> foreach ($movies as $movie){
                                                                                                                movieCard(movie, index)
                                                                                                                }
                                                                                                                function movieCard($movie, $index)-->
            </div>
        </div>
    </div>
</template>



<script>

import '@/styles.css';
import MovieCard from "./MovieCard.vue";

export default {
    name: "MoviesList",

    components: {
        MovieCard
    },

    // list de films à afficher, fournie par le parent
    props: [
        "movies"],

}
</script>
