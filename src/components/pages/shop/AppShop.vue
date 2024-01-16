<script>
import AppFooter from '../AppFooter.vue';
import AppHeader from '../AppHeader.vue';

export default{
    name: 'AppShop',
    components: { 
        AppHeader,
        AppFooter
        }
}
</script>

<template>
<AppHeader/>

 <div>

 </div>



<AppFooter/>
</template>

<style lang="scss" scoped>
    div{ 
        background-color: red;
        width: 100%;
        height: 500px;
    
    }
</style>