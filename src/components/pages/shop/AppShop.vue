<template>
  <div class="container total my-5">
    <div class="row">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="product in filteredProducts" :key="product.id">
            <ShopItem :product="product" />
          </div>
        </div>
      </div>
      <ShopSidebar @filter-applied="updateProducts" />
    </div>
  </div>
</template>

<script>
import ShopItem from './ShopItem.vue';
import ShopSidebar from './ShopSidebar.vue';
import { shop } from '../../../store.js';

export default {
  name: 'AppShop',
  components: {
    ShopItem,
    ShopSidebar
  },
  computed: {
    filteredProducts() {
      return shop.getFilteredProducts();
    }
  },
  methods: {
    updateProducts() {
      // Questa funzione potrebbe non essere necessaria se usi reactivity in modo corretto in Vue 3
      this.$forceUpdate();
    }
  },
};
</script>

<style scoped>
.total {
  padding-top: 200px;
}

/* Aggiungi qui eventuali altri stili */
</style>
