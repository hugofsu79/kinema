<template>
  <div id="app">
    <HeaderNav />

    <!-- si la route est / (racine du site) -->
    <div v-if="$route.path == '/'">

      <div class="video-wrapper mx-auto">
        <video controls autoplay loop muted>
          <source src="../public/video/pellicule.mp4" type=video/mp4>
        </video>
        <h1 class="header">Kinema</h1>
      </div>
      <h3 class="pb-4 font-weight-light">
        Votre évasion à portée de télécommande !
      </h3>


      <!-- En cas de problème de l'appel API -->
      <div v-if="error">
        <p class="bg-danger text-white p-5 fs-2 mx-auto">Une erreur est survenue. Merci de recharger la page ou de
          réessayer plus tard</p>
      </div>

      <!-- En cas de problème de l'appel API -->
      <div v-else>
        <MoviesList v-bind:movies="popularMovies" /> <!--:loading="loading" :errored="errored" -->
      </div>
    </div>


    <!-- tout les autres cas : si la route est différente de  -->
    <div v-else>
      <!-- si la route est différente de / -->
      <router-view v-bind:key="$route.fullPath"></router-view><!--template frenchmovies par exemple -->
    </div>
    <!-- j'affiche le titre de l'accueil et sa sélection de films (les + populaires) -->
    <!-- Movieslist permet d'afficher les films grâce à une voucle v-for (composant enfant) -->
    <!-- v-bind : prop attenduen  = variable des datas (liste de films) -->

  </div>


  <FooterInfo />
</template>

<script>
//import d'axios pour pouvoir faire des appels API
import axios from "axios"

import HeaderNav from "./components/template/HeaderNav.vue"
import FooterInfo from "./components/template/FooterInfo.vue";

import MoviesList from "./components/utils/MoviesList.vue";

export default {

  name: 'App',

  components: {
    HeaderNav, FooterInfo, MoviesList
  },

  data() { //LES variables dispo dans mon composant
    return { // elles vont contenir les films récupéré par l'appel API
      popularMovies: null,
      error: false // error : en cas de problème lors de l'appel API
    }
  },

  created() {
    // code déclenché avant la génération du template par Vue
    // c'est ici que je vais lancer mon appel API

    //!\             Adresse de l'api   / version /mot-clé          /Clé Api                /Les options : langue française + pop décroissante + page 1 /!\\
    axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=e4593b61307460771ee08604391c22e4&language=fr&sort_by=popularity.desc&page=1")

      //.then cas où l'appel de l'API a réussi et renvoie un résultat
      //.then prend en paramètre une fonction fléchée anonyme. res = réponse de l'API ils sont en suite stockés dans la data  
      .then(res => {
        // console.log(res.data.results)
        this.popularMovies = res.data.results // Je stock mes films récupérés dans la variable movies des datas (console -> Proxy)
        console.log(this.popularMovies)
      })
      //.catch => cas où l'appel API échoue
      .catch(() => this.error = true)
  }

  // created() {
  //   axios.get("https://api.themoviedb.org/3/discover/movie?certification_country=usa")
  //     .then(res => {
  //       this.popularMovies = res.data.results // Je stock mes films récupérés dans la variable movies des datas (console -> Proxy)
  //       console.log(this.popularMovies)
  //     })
  // }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  /* background-color: #351614; */
}
</style>
