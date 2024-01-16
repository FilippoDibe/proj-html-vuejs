<script>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';


export default{
    name: 'AppHome',
    components: {  
        AppHeader,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader/>

    <div id="jumbotron">
        
    </div>



    <AppFooter/>
</template>

<style lang="scss"  >
// stili generali
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Variable', sans-serif;
}


#jumbotron{
    background-color: grey;
    width: 100%;
    height: 100vh;
}
</style>