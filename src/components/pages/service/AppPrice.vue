<script>
export default {
    name: 'Price',
    data() {
        return {
            priceList: [
                {
                    icon: 'fa-solid fa-rocket main-logo',
                    name: 'Standard',
                    price: '$ 490 / mo',
                },
                {
                    icon: 'fa-solid fa-suitcase main-logo',
                    name: 'Professional',
                    price: '$ 890 / mo',
                },
                {
                    icon: 'fa-regular fa-gem main-logo',
                    name: 'Ultimate',
                    price: '$ 1390 / mo',
                },
            ]
        }
    }
}
</script>
<template>
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

        </div>
        <div class="pricing-container row justify-content-around align-items-center p-0 w-100 h-100">
            <div class="col-12 col-sm-6 col-md-4 mb-4 h-100 d-flex flex-column align-items-center"
                v-for="element in priceList">
                <div class="price-card w-100 position-relative">

                    <div class="header-price w-100 d-flex flex-column align-items-center">
                        <div>
                            <i :class="element.icon"></i>
                        </div>
                        <h4>{{ element.name }}</h4>
                        <div class="price-block">
                            <h3>{{ element.price }}</h3>
                        </div>
                    </div>

                    <div class="body-price w-100">
                        <div class="w-100 d-flex justify-content-between">
                            <div>
                                <p>Standard Accounting</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between">
                            <div>
                                <p>Platform Access</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between">
                            <div>
                                <p>Business Orientation</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between">
                            <div>
                                <p>Decaded consultant</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div class="w-100 d-flex justify-content-between">
                            <div>
                                <p>Personal assistance</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </div>
                    </div>

                    <div class="position-absolute" style="top: 5%;right: 10%;">
                        <i class="fa-solid fa-arrow-right fa-xl"></i>
                    </div>

                    <div class="price-popular text-white position-absolute" v-if="element.name == 'Professional'">
                        <span>Most Popular</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.block-payment {
    padding-top: 30px;
    background-color: rgb(238, 244, 237);

    h6 {
        color: rgb(0, 166, 166);
    }

    h2 {
        font-size: 2.5em;
        font-weight: 700;
        margin: 10px 0;
    }

    p {
        color: rgb(96, 109, 136);
    }

    .pricing-container {
        margin-top: 30px;

        .price-card {
            background-color: white;
            min-height: 200px;
            margin: 5px;
            padding: 10px;
            border-radius: 10px;
            transition: all 0.5s;

            i,
            h3 {
                color: rgb(0, 166, 166);
            }

            .main-logo {
                font-size: 2.5em;
                margin: 10px 0;
            }

            h4 {
                font-weight: 700;
                margin: 5px 0;
            }

            h3 {
                margin: 10px 0;
            }

            .body-price {
                margin: 15px 0;
            }

            .price-popular {
                background-color: rgb(0, 166, 166);
                font-size: 0.7em;
                padding: 5px;
                left: 0;
                top: 4%;
                border-bottom-right-radius: 20px;
                border-top-right-radius: 20px;
            }
        }

        .price-card:hover {
            transform: translateY(-20px);
        }
    }
}
</style>