<script>
import { store } from '../store';

export default{
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },

   mounted(){
    store.setupScrollListener();
   },

   beforeUnmount(){
    store.removeScrollListener();
   }

}
</script>

<template>
<header :class="{'hidden': store.isHidden }">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid ">
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
            </div>
        </nav>
    </div>
</header>
</template>

<style lang="scss" scoped>
 @use '../styles/general.scss';

 header{
    background-color:white ;
    position: sticky;
    top: 0;
    width: 100%;

   

    header.hidden{
        display: none;
    }
 }

</style>