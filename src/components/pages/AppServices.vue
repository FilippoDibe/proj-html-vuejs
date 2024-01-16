<script>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';

export default {
    name: 'AppServices',
    components: {
        AppHeader,
        AppFooter,

    }


}
</script>

<template>
    <div>
        <AppHeader />

        <div class="header-services d-flex flex-column align-items-center justify-content-center position-relative"
            style="background-image: url('https://nexgen.codings.dev/wp-content/uploads/2021/03/work.mp4');">
            <video autoplay muted loop playsinline class="background-video">
                <source src="https://nexgen.codings.dev/wp-content/uploads/2021/03/work.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div class="content-overlay">
                <h1>Services</h1>
                <div class="d-flex justify-content-around">
                    <a href="" class="m-3">home</a>
                    <a href="" class="m-3">services</a>
                </div>
            </div>
            <div class="position-absolute w-100 h-100" style="background-color: #05050a9c;"></div>
        </div>

        <div class="advantages-container d-flex align-items-center justify-content-center w-100">
            <div class="advantages-content row justify-content-center justify-content-around p-0 flex-nowrap">
                <div class="ad-card col-4 mb-4 h-100 d-flex flex-column align-items-center">
                    <div class="ad-img-container w-100">
                        <div class="ad-img d-flex align-items-center justify-content-center">
                            <i class="fa-regular fa-user fa-xl"></i>
                        </div>
                    </div>
                    <h3>Human capital</h3>
                    <p class="text-center">
                        Humanizing business: Harness the power of technology to improve the way people work.
                    </p>
                </div>

                <div class="ad-card col-4 mb-4 h-100 d-flex flex-column align-items-center">
                    <div class="ad-img-container w-100">
                        <div class="ad-img d-flex align-items-center justify-content-center">
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <h3>Human capital</h3>
                    <p class="text-center">
                        Humanizing business: Harness the power of technology to improve the way people work.
                    </p>
                </div>

                <div class="ad-card col-4 mb-4 h-100 d-flex flex-column align-items-center">
                    <div class="ad-img-container w-100">
                        <div class="ad-img d-flex align-items-center justify-content-center">
                            <i class="fa-regular fa-user"></i>
                        </div>
                    </div>
                    <h3>Human capital</h3>
                    <p class="text-center">
                        Humanizing business: Harness the power of technology to improve the way people work.
                    </p>
                </div>
            </div>
        </div>

        <div class="our-services d-flex flex-column align-items-center">
            <h6 class="text-center">OUR BUSINESS AREAS</h6>
            <h2 class="text-center">Excellence in Services</h2>
            <p class="text-center">
                We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
                experienced and renowned professionals. These are some options that you can hire.
            </p>

            <div class="service-container row justify-content-center">
                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-service">
                        <div class="d-flex justify-content-between font-section">
                            <div>
                                <i class="fa-solid fa-wave-square big-font" style="color: rgb(5, 130, 131);"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                            </div>
                        </div>
                        <div class="name-service">
                            <h3>Audit & assurance</h3>
                        </div>
                        <div class="paragraph-service">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab repudiandae provident
                                dignissimos nulla
                                facere quam repellendus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-payment">
            <h6 class="text-center">
                MONTHLY PLANS
            </h6>
            <h2 class="text-center">
                Pricing Table
            </h2>
            <p class="text-center">
                We can help you deliver and execute your future, wherever you compete, using the latest technologies, from
                strategy development to implementation.
            </p>
        </div>

        <AppFooter />
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

    .advantages-content {
        width: 90%;
        margin: 0 auto;
    }

    .ad-card {
        background-color: white;
        margin: 0 10px 20px;
        border-radius: 10px;
        padding: 15px;

        .ad-img {
            width: 50px;
            height: 50px;
            background-color: rgb(217, 242, 242);
            border-radius: 50%;
            margin: 10px 0;
        }

        h3 {
            margin: 10px 0;
        }

        p {
            margin: 10px 0;
        }
    }
}

.our-services {
    //width: 100vw;
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

    .service-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;

        .col-6 {
            width: calc(50% - 20px);
            /* Larghezza al 50% della larghezza del container con margini */
            //margin: 10px;
        }

        .card-service {
            background-color: rgb(25, 25, 31);
            min-height: 200px;
            margin: 10px 0;
            border-radius: 5px;
            padding: 15px;

            .font-section {
                margin-top: 10px;
                padding: 5px;
            }

            .big-font {
                font-size: 2.5em;
            }
        }

        .name-service {
            margin-top: 10px;

            h3 {
                color: white;
                font-weight: bold;
            }
        }
    }
}

.block-payment {
    min-height: 500px;
    padding: 70px 0;
    background-color: rgb(238, 244, 237);

    h6 {
        color: rgb(5, 130, 131);
    }
}
</style>
