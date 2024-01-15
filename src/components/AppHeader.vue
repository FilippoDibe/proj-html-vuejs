<script>
export default{
    name: 'AppHeader',
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <!-- Logo a sinistra -->
        <a class="navbar-brand" href="#">
            <img src="../img/home/logo.PNG" alt="Logo" height="40"> 
        </a>

        <!-- Bottone per il menu a panino -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Voci di menu -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Servizi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
            </ul>
        </div>
  </div>
</nav>
</template>

<style lang="scss">
 @use '../styles/general.scss'
</style>