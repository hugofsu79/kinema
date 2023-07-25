import { createWebHashHistory, createRouter } from "vue-router";

// on importe les différents composants (concernés par des routes)
import App from "./App.vue"
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import LastMovies from "./components/LastMovies.vue";
import SearchMovies from "./components/SearchMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import MovieDetails from "./components/MovieDetails.vue";

const routes = [ //on déclare les routes
    {
        path: '/', //path = url
        component: App //composant associé
    },
    {
        path: '/AmericanMovies',
        component: AmericanMovies
    },
    {
        path: '/AmericanMovies',
        component: AmericanMovies
    },
    {
        path: '/FrenchMovies',
        component: FrenchMovies
    },
    {
        path: '/LastMovies',
        component: LastMovies
    },
    {
        path: '/Top50Movies',
        component: Top50Movies
    },
    {
        path: '/MovieDetails',
        component: MovieDetails
    },
    {
        path: '/SearchMovies',
        component: SearchMovies
    },
    {
        path: '/Top50Movies',
        component: Top50Movies
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;