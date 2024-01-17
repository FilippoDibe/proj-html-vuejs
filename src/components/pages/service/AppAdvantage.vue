<script>

export default {
    name: 'AppAdvantage',
    data() {
        return {
            adList: [
                {
                    iconClass: 'fa-regular fa-user fa-xl',
                    title: 'Human capital',
                    desc: 'Humanizing business: Harness the power of technology to improve the way people work.',
                },
                {
                    iconClass: 'fa-regular fa-folder fa-xl',
                    title: 'Core Business',
                    desc: 'It takes innovative approaches to transform, modernize, and run existing platforms.',
                },
                {
                    iconClass: 'fa-solid fa-truck-fast fa-xl',
                    title: 'Performance',
                    desc: 'Achieving maximum impact and value from investments in finance and supply chain.',
                },
            ]
        }
    }
}
</script>

<template>
    <div class="advantages-container d-flex align-items-center justify-content-center w-100">
        <div class="advantages-content row justify-content-around align-items-center p-0 h-100">
            <div class="ad-card col-12 col-sm-5 col-md-3 mb-4 h-100 d-flex flex-column align-items-center"
                v-for="element in adList">
                <div class="ad-img-container w-100">
                    <div class="ad-img d-flex align-items-center justify-content-center">
                        <i :class="element.iconClass"></i>
                    </div>
                </div>
                <h3>{{ element.title }}</h3>
                <p class="text-center">
                    {{ element.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.advantages-container {
    background-color: rgb(238, 244, 237);

    .advantages-content {
        width: 90%;
        margin: 0 auto;


        .ad-card {
            background-color: white;
            height: 250px;
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
                font-weight: bold;
                font-size: 1.4em;
            }

            p {
                margin: 10px 0;
                font-size: 0.8em;
            }

        }

        .ad-card:hover {
            transform: translateY(-20px);
        }


    }
}
</style>