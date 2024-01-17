<script>
export default {
    name: 'Price',
}
</script>
<template>
    <div class="pricing-container row justify-content-around align-items-center p-0 flex-nowrap w-100 h-100">
        <div class="col-4 mb-4 h-100 d-flex flex-column align-items-center">
            <div class="price-card w-100 position-relative">

                <div class="header-price w-100 d-flex flex-column align-items-center">
                    <div>
                        <i class="fa-solid fa-rocket main-logo"></i>
                    </div>
                    <h4>Standard</h4>
                    <div class="price-block">
                        <h3>$ 490 / mo</h3>
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
            </div>
        </div>

        <div class="col-4 mb-4 h-100 d-flex flex-column align-items-center">
            <div class="price-card w-100 position-relative">

                <div class="header-price w-100 d-flex flex-column align-items-center">
                    <div>
                        <i class="fa-solid fa-suitcase main-logo"></i>
                    </div>
                    <h4>professional</h4>
                    <div class="price-block">
                        <h3>$ 490 / mo</h3>
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
            </div>
        </div>
        <div class="col-4 mb-4 h-100 d-flex flex-column align-items-center">
            <div class="price-card w-100 position-relative">

                <div class="header-price w-100 d-flex flex-column align-items-center">
                    <div>
                        <i class="fa-regular fa-gem main-logo"></i>
                    </div>
                    <h4>Ultimate</h4>
                    <div class="price-block">
                        <h3>$ 490 / mo</h3>
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
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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
    }

    .price-card:hover {
        transform: translateY(-20px);
    }
}
</style>