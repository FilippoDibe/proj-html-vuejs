<script>
import Advantage from './AppAdvantage.vue';
import Type from './AppType.vue';
import Price from './AppPrice.vue';

export default {
    name: 'AppServices',
    components: {
        Advantage,
        Type,
        Price,
    }


}
</script>

<template>
    <div>

        <!-- SEZIONE DI TITOLO -->

        <div class="header-services d-flex flex-column align-items-center justify-content-center position-relative">
            <video autoplay muted loop playsinline class="background-video">
                <source src="https://nexgen.codings.dev/wp-content/uploads/2021/03/work.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div class="content-overlay">
                <h1>Services</h1>
                <div class="d-flex justify-content-around">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#" id="aHome" style="text-decoration: unset;">
                                    <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                                        Home
                                    </router-link>
                                </a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <a href="" style="text-decoration: unset; color: rgb(0, 166, 166);">
                                    Services
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="position-absolute w-100 h-100" style="background-color: #05050a9c;"></div>
        </div>


        <!-- SEZIONE DI VANTAGGI -->
        <Advantage />


        <!-- SEZIONE DEI TIPI DI SERVIZIO -->
        <Type />

        <!-- SEZIONE ABBONAMENTI -->
        <Price />

    </div>
</template>

<style lang="scss" scoped>
.header-services {
    min-height: 360px;

    .background-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .content-overlay {
        position: relative;
        z-index: 1;
        color: white;
        /* Cambia il colore del testo in base al tuo sfondo video */

        #aHome {
            color: rgb(212, 212, 212);
            transition: all 0.1s;
        }

        #aHome:hover {
            color: rgb(0, 166, 166);
        }
    }

    h1 {
        font-size: 4em;
        font-weight: bold;
    }
}
</style>
