<script>

export default {
    name: 'AppProjects',
}
</script>

<template>
    <div id="container">

        <div id="box">

            <div id="title" class="d-flex">
                <h1>
                    Action &
                </h1>
                <div class="content-decor">
                    <span class="title-decor">Projects</span>
                    <div class="color-block"></div>
                </div>

            </div>

            <ul id="menu">
                <li>ALL</li>
                <li>ENVIROMENTS</li>
                <li>EVENTS</li>
                <li>INSTITUTIONAL</li>
                <li>SOCIAL</li>
                <li>TECHNOLOGY</li>
                <li>INNOVATION</li>
            </ul>

            <div id="row" class="row">

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-5.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-4.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-3.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-2.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-6.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

                <div class="card col-12 col-md-5 col-lg-3">
                    <img src="https://nexgen.codings.dev/wp-content/uploads/2021/04/portfolio-1.jpg" alt="" class="img">
                    <div class="info">
                        <h3>Portfolio item with intro with sidebar</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum...</p>
                        <div><i class="fa-solid fa-user"></i> <span style="margin-right: 15px;">Codings </span> <i
                                class="fa-regular fa-clock"></i> <span>3 years</span></div>
                    </div>
                    <div class="dark-div position-absolute w-100 h-100"></div>
                </div>

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
#container {
    width: 100%;
    min-height: 1180px;
    background-color: #e2e2e6;
    display: flex;
    justify-content: center;
    align-items: center;

    #box {
        width: 95%;
        max-width: 1200px;
        display: flex;
        margin: 30px 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        #title {
            align-self: center;
            margin-bottom: 30px;
            position: relative;
            color: #20323e;
            font-weight: 800;

            h1 {
                font-size: 3em;
                font-weight: 800;
                display: flex;
                align-items: center;
                margin: 0 5px 0 0;

                @media screen and (max-width:500px) {
                    font-size: 1.6em;
                }
            }

            .content-decor {
                .title-decor {
                    font-size: 3em;
                    position: relative;
                    color: #048282;
                    z-index: 1;

                    @media screen and (max-width:500px) {
                        font-size: 1.6em;
                    }
                }

                .color-block {
                    width: 210px;
                    height: 25px;
                    background-color: #c1dadf;
                    position: absolute;
                    left: 243px;
                    top: 32px;

                    @media screen and (max-width:500px) {
                        width: 124px;
                        left: 125px;
                        top: 8px;
                    }
                }
            }


        }



        #row {
            width: 100%;
            min-height: 370px;
            height: 100%;
            display: flex;
            gap: 30px;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 20px;

            //stili delle cards
            .card {
                max-width: 370px;
                height: 360px;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
                padding: 40px;

                .info {
                    position: relative;
                    z-index: 3;
                    color: white;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: 0.5s;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    h3 {
                        bottom: 0;
                        font-size: 20px;
                        font-weight: 600;
                        z-index: 1;
                        color: white;
                        font-size: 25px;
                        vertical-align: bottom;
                        margin: 0px;
                        text-align: center;
                    }

                    p {
                        letter-spacing: 1px;
                        font-size: 0.8em;
                        margin: 15px 0;
                        text-align: center;
                    }

                    span {
                        font-size: 0.8em;
                    }
                }

                .img {
                    width: 100%;
                    height: 100%;
                    -o-object-fit: cover;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 10px;
                    filter: brightness(0.6) contrast(0.6) saturate(1.2) contrast(1.5);
                }

                .dark-div {
                    background-color: rgba(47, 40, 102, 0.342);
                    left: 0;
                    border-radius: 10px;
                }

            }

            .card:hover .info {
                opacity: 1;
                transform: translateY(0px);
            }

            .card:hover:before {
                opacity: 1;
            }

            .card:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                z-index: 2;
                transition: 0.5s;
                opacity: 0;
            }
        }

        //stili della lista 
        #menu {
            display: flex;
            width: 100%;
            margin: auto;
            justify-content: center;
            list-style: none;
            flex-wrap: wrap;
            gap: 8px;

            li {
                color: #606D75;
                padding: 5px 12px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 0.8em;
                transition: all 0.5s;
            }

            li:hover {
                color: rgb(0, 166, 172);
            }
        }
    }
}
</style>