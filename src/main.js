import { createApp } from 'vue'
import App from './App.vue'



//j'importe le routeur
import router from "./router.js"

// on importe Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
    .use(router) // je l'injecte dans l'application <- il permet de rajouter des options
    .mount('#app')



// import styles from "./components/styles.css";