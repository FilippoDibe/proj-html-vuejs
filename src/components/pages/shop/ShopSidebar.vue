<script>
import { shop } from '../../../store.js';
import PriceFilter from './PriceFilter.vue';
import ShopCart from './ShopCart.vue';
import OnSaleProducts from './OnSaleProducts.vue';
import ProductCategories from './ProductCategories.vue';
import ProductTags from './ProductTags.vue';
export default {
  name: 'ShopSidebar',
  components:{
    PriceFilter,
    ShopCart,
    OnSaleProducts,
    ProductCategories,
    ProductTags,
  }
  
  
};
</script>

<template>
    <div class="col-lg-3">
        <!-- filtro prezzo  -->
      <PriceFilter :minPrice="minPrice" :maxPrice="maxPrice" @price-filtered="handlePriceFilter"/>
      <!-- sezione carrello -->
      <ShopCart/>
    <!-- prodotti in offerta  -->
        <OnSaleProducts/>
    <!-- categoria prodotti  -->
      <ProductCategories/>
    <!-- tags prodtti  -->
      <ProductTags/>
    </div>
  </template>
  

  