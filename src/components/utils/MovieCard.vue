<template>
    <!--convrtion v for il faut une key -->
    <!--/v-bind:key optimisé juste :key -->
    <router-link v-bind:to="`/MovieDetails/${movie.id}`" class="link text-center nav-link mx-5">
        <!-- le link est pourvut d'une variable, il faut donc faire un(`) $(___.id)-->
        <p v-if="$route.path == '/Top50Movies'">
            <span v-once>n°{{ index + 1 }} </span>
        </p>
        <div class="card mb-2" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex align-items-center">
                    <img v-bind:src="urlDeBase + movie.poster_path" class="img-fluid rounded-4 p-2" alt="poster_du_film">
                </div>
                <!--/v-bind:key optimisé juste :key -->
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title.substring(0, 20) }}</h5>
                        <!--{{alias_de_chaque_film.élément souhaité}}-->
                        <p class="card-text">note moyenne : {{ movie.vote_average }}</p>
                        <p class="card-text">Date de sortie : {{ movie.release_date }}</p>
                        <p class="card-text"> {{ movie.overview.substring(0, 160) + "..." }}</p>
                        <!-- <p class="card-text">{{ movie.vote_count }} votes</p> -->
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>



export default {

    name: "MovieCard",
    data() {
        return {
            // url de base des images de TMDB
            urlDeBase: "https://image.tmdb.org/t/p/original/",
        }
    },
    props: [
        "movie",
        "index"
    ],

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->