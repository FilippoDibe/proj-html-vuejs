<script>

export default {
    name: 'AppAdvantage',
}
</script>

<template>
    <div class="advantages-content row justify-content-around align-items-center p-0 flex-nowrap h-100">
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
                    <i class="fa-regular fa-folder fa-xl"></i>
                </div>
            </div>
            <h3>Core Business</h3>
            <p class="text-center">
                It takes innovative approaches to transform, modernize, and run existing platforms.
            </p>
        </div>

        <div class="ad-card col-4 mb-4 h-100 d-flex flex-column align-items-center">
            <div class="ad-img-container w-100">
                <div class="ad-img d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-truck-fast fa-xl"></i>
                </div>
            </div>
            <h3>Performance</h3>
            <p class="text-center">
                Achieving maximum impact and value from investments in finance and supply chain.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.advantages-content {
    width: 90%;
    margin: 0 auto;


    .ad-card {
        background-color: white;
        max-height: 300px;
        margin: 0 10px 20px;
        border-radius: 10px;
        padding: 15px;
        transition: all 0.5s;
        margin-top: 30px;

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

    .ad-card:hover {
        transform: translateY(-20px);
    }


}
</style>