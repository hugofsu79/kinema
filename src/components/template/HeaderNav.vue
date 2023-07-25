<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="link text-center nav-link mx-5">Accueil</router-link>
          </li>
          <li class="nav-item"><router-link to="/AmericanMovies" class="link text-center nav-link mx-5">Films
              américains</router-link>
          </li>
          <li class="nav-item"><router-link to="/FrenchMovies" class="link text-center nav-link mx-5">Films
              Français</router-link>
          </li>
          <li class="nav-item"><router-link to="/Top50Movies" class="link text-center nav-link mx-5">Top
              50</router-link>
          </li>
          <li class="nav-item"><router-link to="/LastMovies" class="link text-center nav-link mx-5">Film de
              2023</router-link>
          </li>
          <li class="nav-item"><router-link to="/SearchMovies" class="link text-center nav-link mx-5">Rechercher un
              film</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  name: "HeaderNav"
}
</script>
