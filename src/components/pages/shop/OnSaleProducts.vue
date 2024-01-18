<script>
import { shop } from '../../../store.js'
export default {
    name: 'OnSaleProducts',
    emits: ['filter-applied'],
    computed: {
    onSaleProducts() {
      return shop.getFilteredProducts().filter(p => p.sale);
    },
    }
}
</script>
<template>
    <div class="border p-3 mb-4">
  <h5>Prodotti in Offerta</h5>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center" 
       v-for="product in onSaleProducts" :key="product.id">
      <img :src="product.imageUrl" class="img-fluid mr-3" alt="..." style="width: 50px; height: auto;">
      <div>
        {{ product.name }} - <span class="fw-bold">{{ product.priceSale | currency }}</span>
      </div>
    </a>
  </div>
</div>
</template>
<style>
      .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
  }
  
  .sale-badge {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  
  .border {
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
  }
  
  .form-range {
    /* Stili personalizzati per il range slider */
  }
  
  .list-group {
    /* Stili aggiuntivi per i gruppi di elenchi */
  }
  
  .badge {
    font-size: 0.8rem;
    margin: 0.2rem;
  }
</style>