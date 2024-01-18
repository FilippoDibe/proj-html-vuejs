<script>
import { shop } from '../../../store.js';
export default{
    name:'PriceFilter',
    emits: ['filter-applied'],
    data() {
    return {
      minPrice: 0,
      maxPrice: 2000,
    };
  },
  methods: {
    applyPriceFilter() {
      shop.setPriceRange(this.minPrice, this.maxPrice);
      this.$emit('filter-applied');
    },
},
}
</script>
<template>
    <div class="border p-3 mb-4">
        <h5>Filtra per Prezzo</h5>
        <div class="d-flex align-items-center">
          <div class="me-2">$0</div>
          <input type="range" class="form-range flex-grow-1 mx-2" min="0" max="2000" v-model.number="minPrice">
          <div class="ms-2">$2000</div>
        </div>
        <div class="d-flex align-items-center">
          <div class="me-2">$0</div>
          <input type="range" class="form-range flex-grow-1 mx-2" min="0" max="2000" v-model.number="maxPrice">
          <div class="ms-2">$2000</div>
        </div>
        <button @click="applyPriceFilter" class="btn btn-primary mt-2">Filtra</button>
        <p class="text-center mt-2">Prezzo: ${{ minPrice }} — ${{ maxPrice }}</p>
      </div>
</template>
<style>
  
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