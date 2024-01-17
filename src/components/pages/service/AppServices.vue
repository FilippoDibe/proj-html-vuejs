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
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page"><a href="">Library</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="position-absolute w-100 h-100" style="background-color: #05050a9c;"></div>
        </div>


        <!-- SEZIONE DI VANTAGGI -->
        <div class="advantages-container d-flex align-items-center justify-content-center w-100">
            <Advantage />
        </div>


        <!-- SEZIONE DEI TIPI DI SERVIZIO -->
        <div class="our-services d-flex flex-column align-items-center">
            <h6 class="text-center">OUR BUSINESS AREAS</h6>
            <h2 class="text-center">Excellence in Services</h2>
            <p class="text-center w-75">
                We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
                experienced and renowned professionals. These are some options that you can hire.
            </p>

            <Type />
        </div>

        <div class="block-payment d-flex flex-column align-items-center">
            <h6 class="text-center">
                MONTHLY PLANS
            </h6>
            <h2 class="text-center">
                Pricing Table
            </h2>
            <p class="text-center w-75">
                We can help you deliver and execute your future, wherever you compete, using the latest technologies, from
                strategy development to implementation.
            </p>

            <div class="w-100 d-flex justify-content-center">
                <Price />
            </div>

        </div>
    </div>
</template>

<style lang="scss">
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
    }

    h1 {
        font-size: 4em;
        font-weight: bold;
    }
}

.advantages-container {
    height: 370px;
    background-color: rgb(238, 244, 237);
}

.our-services {
    min-height: 500px;
    background-color: rgb(17, 17, 23);
    padding: 70px 0;

    h6 {
        color: rgb(5, 130, 131);
        font-weight: bold;
    }

    h2 {
        color: white;
        font-size: 2em;
        font-weight: 600;
        margin-top: 20px;
    }

    p {
        color: rgb(140, 147, 165);
        margin-top: 20px;
    }
}

.block-payment {
    min-height: 500px;
    padding: 70px 0;
    background-color: rgb(238, 244, 237);

    h6 {
        color: rgb(5, 130, 131);
    }

    h2 {
        font-size: 3em;
        font-weight: bold;
    }
}
</style>
