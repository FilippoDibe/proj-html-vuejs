<script>

import AppProjects from '../home/AppProjects.vue';
import AppCompany from '../home/AppCompany.vue';
import AppServicesHome from '../home/AppServicesHome.vue';
import AppResults from '../home/AppResults.vue';
import AppContacts from './AppContacts.vue';
import AppCarousel from './AppCarousel.vue';

export default {
  name: 'AppHome',
  components: {
    AppServicesHome,
    AppCompany,
    AppProjects,
    AppResults,
    AppContacts,
    AppCarousel,
  }
}
</script>

<template>
  <!-- sezione con il carosello -->
  <AppCarousel />


  <!-- sezione con i componenti  -->
  <AppServicesHome />
  <AppCompany />
  <AppProjects />
  <AppResults />
  <AppContacts />
</template>

<style lang="scss" scoped></style>