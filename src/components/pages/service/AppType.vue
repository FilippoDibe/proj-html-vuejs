<script>
export default {
    name: 'Type',
}
</script>
<template>
    <div class="service-container row justify-content-center align-items-center h-100">
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
                        <i class="fa-solid fa-suitcase big-font" style="color: rgb(5, 130, 131);"></i>
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
                        <i class="fa-solid fa-chart-line big-font" style="color: rgb(5, 130, 131);"></i>
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
                        <i class="fa-solid fa-plane big-font" style="color: rgb(5, 130, 131);"></i>
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
                        <i class="fa-solid fa-globe big-font" style="color: rgb(5, 130, 131);"></i>
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
                        <i class="fa-solid fa-exclamation big-font" style="color: rgb(5, 130, 131);"></i>
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
</template>

<style lang="scss" scoped>
.service-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;

    .col-6 {
        width: calc(50% - 20px);
        min-height: 300px;
        transition: all 0.5s;
    }

    .col-6:hover {
        transform: translateY(-20px);

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

    .card-service:hover {
        margin-bottom: 20px;
    }

    .name-service {
        margin-top: 10px;

        h3 {
            color: white;
            font-weight: bold;
        }
    }
}
</style>