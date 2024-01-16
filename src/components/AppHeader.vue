<script>

import { isScrolled, isHidden, setupScrollListener, removeScrollListener } from '../store.js';

export default {
    name: 'AppHeader',
    
    mounted() {
        setupScrollListener();
    },

    beforeUnmount() {
        removeScrollListener();
    },
    computed: {
        isScrolled(){
            return isScrolled.value;
        },
        isHidden() {
            return isHidden.value;
        },
    },
}
</script>

<template>
    <header :class="{ 'scrolled': isScrolled, 'hidden': isHidden, 'transparent': isTransparent }">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <!-- Logo a sinistra -->
                <a class="navbar-brand" href="#">
                    <img src="../img/home/logo.PNG" alt="Logo" height="40px"> 
                </a>

                <!-- Bottone per il menu a panino -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Voci di menu -->
                <div class="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
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
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

header {
    background-color: rgb(255, 255, 255);
    transition: background-color 0.3s, top 0.3s;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    &.scrolled {
        background-color: #0d1b2a; 
        color: white;
    }

    &.hidden {

        display: none; 
    }
    &.transparent{
        background-color:rgb(255, 255, 255) ;
    }
}
</style>
