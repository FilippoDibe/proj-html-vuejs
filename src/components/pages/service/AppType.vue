<script>
export default {
    name: 'Type',
    data() {
        return {
            typeList: [
                {
                    name: 'Audit & assurance',
                    iconClass: 'fa-solid fa-wave-square big-font',
                },
                {
                    name: 'Financial Advisory',
                    iconClass: 'fa-solid fa-suitcase big-font',
                },
                {
                    name: 'Analytics and M&A',
                    iconClass: 'fa-solid fa-chart-line big-font',
                },
                {
                    name: 'Middle Marketing',
                    iconClass: 'fa-solid fa-plane big-font',
                },
                {
                    name: 'Legal Consulting',
                    iconClass: 'fa-solid fa-globe big-font',
                },
                {
                    name: 'Regulatory Risk',
                    iconClass: 'fa-solid fa-exclamation big-font',
                },
            ]
        }
    }
}
</script>
<template>
    <div class="our-services d-flex flex-column align-items-center">
        <h6 class="text-center">OUR BUSINESS AREAS</h6>
        <h2 class="text-center">Excellence in Services</h2>
        <p class="text-center w-75">
            We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of
            experienced and renowned professionals. These are some options that you can hire.
        </p>

        <div class="service-container row justify-content-center align-items-center h-100">
            <div class="col-12 col-sm-6 service-content" v-for="card in typeList">
                <div class="card-service">
                    <div class="d-flex justify-content-between font-section">
                        <div>
                            <i :class="card.iconClass" style="color: rgb(5, 130, 131);"></i>
                        </div>
                        <div>
                            <i class="fa-solid fa-arrow-right fa-xl" style="color: rgb(5, 130, 131);"></i>
                        </div>
                    </div>
                    <div class="name-service">
                        <h3>{{ card.name }}</h3>
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
</template>

<style lang="scss" scoped>
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

    .service-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1200px;
        width: 90%;

        .service-content {
            min-height: 300px;
            transition: all 0.5s;

            .card-service {
                background-color: rgb(25, 25, 31);
                height: 300px;
                margin: 20px 0;
                border-radius: 5px;
                padding: 15px;

                .font-section {
                    margin-top: 10px;
                    padding: 5px;
                }

                .big-font {
                    font-size: 2.5em;
                }

                .name-service {
                    margin-top: 10px;

                    h3 {
                        color: white;
                        font-weight: bold;
                    }
                }
            }

            .card-service:hover {
                margin-bottom: 20px;
            }
        }

        .service-content:hover {
            transform: translateY(-20px);

        }
    }
}
</style>