<template>
    <h1>Détail</h1>
</template>

<script>
export default {
    name: "MovieDetails",

    data() {
        return {
            // url de base des images de TMDB
            urlDeBase: "https://image.tmdb.org/t/p/original/",
        }
    },
    // liste de films à afficher, fournie par le parent
    props: ["movies"]
}
</script>