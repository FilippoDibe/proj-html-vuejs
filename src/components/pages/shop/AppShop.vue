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
    addToCart(product) {
      shop.addToCart(product);
    }
  }
  
};
</script>
<template>
  <div class="container total my-5">
    <div class="row">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="product in filteredProducts" :key="product.id" @add-to-cart="addToCart">
            <ShopItem :product="product" @add-to-cart="addToCart(product)"/>
          </div>
        </div>
      </div>
      <ShopSidebar @filter-applied="updateProducts" />
    </div>
  </div>
</template>



<style scoped>
.total {
  padding-top: 200px;
}

/* Aggiungi qui eventuali altri stili */
</style>
