<script>
import { shop } from '../../../store'
    export default{
        name:'ShopCart',
        computed: {
            shop() {
            return shop;
            },
            cartTotal() {
            return shop.cartTotal;
            }
        },
        methods: {
   
            removeFromCart(item) {
            shop.removeFromCart(item.id);
            }
        }
    }
</script>
<template>
<div v-if="shop.cart.length > 0" class="border p-3 mb-4">
      <h5>Carrello</h5>
      <ul class="list-group">
        <li v-for="item in shop.cart" :key="item.id" class="list-group-item">
          <img :src="item.imageUrl" alt="..." class="img-thumbnail" style="width: 50px; height: 50px;">
          {{ item.name }} - {{ item.quantity }} x {{ item.price | currency }}
          <button @click="removeFromCart(item)">Remove</button>
        </li>
      </ul>
      <div class="total">
        Totale: {{ shop.cartTotal | currency }}
      </div>
      <!-- ...bottone per procedere al checkout... -->
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
