<script>
import AppProjects from '../home/AppProjects.vue';
import AppCompany from '../home/AppCompany.vue'
import AppServicesHome from '../home/AppServicesHome.vue'

export default{
    name: 'AppHome',
    components: { 
        AppServicesHome,
        AppCompany,
        AppProjects,

    }
};
</script>

<template>

<!-- sezione con il carosello -->
<div id="jumbotron"></div>


<!-- sezione con i componenti  -->
<AppServicesHome />
<AppCompany />
<AppProjects />

</template>

<style lang="scss" scoped>
// stili del carosello
#jumbotron{
    background-color: grey;
    width: 100%;
    height: 100vh;
}


</style>