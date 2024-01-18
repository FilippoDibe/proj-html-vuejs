<script>
import { shop } from '../../../store.js';
export default{
    name: 'ProductCategories',
    methods: {
    
        selectTag(tag) {
        shop.setTag(tag);
        this.$emit('filter-applied');
        },
    },
  computed: {
        tags() {
        return shop.getTags();
        },
    },
}
</script>
<template>
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
</template>

<style scoped>
.border {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
}

.badge {
  font-size: 0.8rem;
  margin: 0.2rem;
}
</style>