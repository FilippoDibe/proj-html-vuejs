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
    <AppHeader />

    <div class="header-services d-flex flex-column align-items-center justify-content-center">
        <h1>Services</h1>
        <div class="d-flex">
            <a href="" class="m-3">home</a>
            <a href="" class="m-3">services</a>
        </div>
    </div>
    <div class="advantages-container d-flex align-items-center justify-content-center w-100">
        <div class="advantages-content row">
            <div class="">

            </div>
            <div></div>
            <div></div>
        </div>

    </div>


    <AppFooter />
</template>
<style lang="scss">
.header-services {
    min-height: 360px;
    color: grey;
    border: 1px solid black;
}

.advantages-container {
    min-height: 370px;
}

.advantages-content {
    width: 80%;
    margin: 0 auto;
    min-height: 200px;
    background-color: red;
}
</style>
