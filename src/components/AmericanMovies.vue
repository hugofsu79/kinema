<template>
    <!-- boucle v-for qui va parcourir les films pour les afficher -->
    <!-- v-bind:key="movie.id" : identifiant de chaque film -->
    <!-- v-bind permet d'injecter une variable en tant que valeur d'un attribut -->
    <div class="container-fluid">
        <div class="row">

            <div v-for="movie in movies" v-bind:key="movie.id" class="col-sm-6 col-md-4 col-lg-4 p-3">
                <!-- v-bind : prop attendue = valeur (mon alias du v-for) -->
                <MovieCard v-bind:movie="movie" />


            </div>
        </div>
    </div>
</template>


<script>

import MoviesList from "./MoviesList";

export default {
    name: "AmericainMovies",

    components: {
        MoviesList
    },

    // list de films à afficher, fournie par le parent
    props: ["movies"],

}

</script>
