<script>
import { shop } from '../../../store.js';
export default {
    name:'ProductCategories',
    methods:{
        selectCategory(category) {
      shop.setCategory(category);
      this.$emit('filter-applied');
    },
    },
    computed: {
    categories() {
      return shop.getCategories();
    },
    }
}
</script>
<template>
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
</template>
  
<style scoped>
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}


.border {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
}

</style>