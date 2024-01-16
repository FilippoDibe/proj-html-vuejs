<script >
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHome from './components/pages/AppHome.vue'
export default{
  components:{
    AppHeader,
    AppFooter,
    AppHome,
  }
 

}
</script>

<template>
  <main>
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
