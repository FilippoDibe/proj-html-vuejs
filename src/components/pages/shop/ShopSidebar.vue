<script>
import { shop } from '../../../store.js';
export default {
  name: 'ShopSidebar',
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
    selectCategory(category) {
      shop.setCategory(category);
      this.$emit('filter-applied');
    },
    selectTag(tag) {
      shop.setTag(tag);
      this.$emit('filter-applied');
    },
  },
  computed: {
    onSaleProducts() {
      return shop.getFilteredProducts().filter(p => p.sale);
    },
    categories() {
      return shop.getCategories();
    },
    tags() {
      return shop.getTags();
    },
  },
};
</script>

<template>
    <div class="col-lg-3">
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
    
      <div class="border p-3 mb-4">
        <h5>Prodotti in Offerta</h5>
        <div class="list-group">
          <a 
            href="#" 
            class="list-group-item list-group-item-action" 
            v-for="product in onSaleProducts" 
            :key="product.id"
          >
            {{ product.name }} - {{ product.priceSale }}
          </a>
        </div>
      </div>
    
      <div class="border p-3 mb-4">
        <h5>Categorie Prodotti</h5>
        <div class="list-group">
          <a 
            href="#" 
            class="list-group-item list-group-item-action" 
            v-for="category in categories" 
            :key="category"
            @click.prevent="selectCategory(category)"
          >
            {{ category }}
          </a>
        </div>
      </div>
    
      <div class="border p-3">
        <h5>Tag Prodotti</h5>
        <div class="d-flex flex-wrap">
          <a 
            href="#" 
            class="badge bg-secondary m-1" 
            v-for="tag in tags" 
            :key="tag" 
            @click.prevent="selectTag(tag)"
          >
            {{ tag }}
          </a>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
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
  