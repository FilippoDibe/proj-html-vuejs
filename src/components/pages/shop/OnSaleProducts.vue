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
    <div class="onsale-products">
      <h5 class="title">Prodotti in Offerta</h5>
      <div class="product-list">
        <div class="product-item" style="border-bottom: 1px solid grey;" v-for="product in onSaleProducts" :key="product.id">
          <img :src="product.imageUrl" class="product-image" alt="Immagine del prodotto">
          <div class="product-details">
            <span class="product-name">{{ product.name }}</span>
            <span class="product-price">{{ product.priceSale | currency }}€</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .onsale-products {
    padding: 16px;
    // border: 1px solid #E2E3E7; // utilizzare il colore grigio chiaro della palette
    margin-bottom: 24px;
    .title {
      margin-bottom: 16px;
      color: #000; // si può scegliere un colore dalla palette se necessario
      font-weight: bold;
    }
    .product-list {
      .product-item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        border-bottom: 1px grey;
        &:last-child {
          margin-bottom: 0;
        }
        .product-image {
          width: 50px; // larghezza immagine
          margin-right: 10px; // spazio tra immagine e testo
        }
        .product-details {
          display: flex;
          flex-direction: column;
          .product-name {
            font-size: 14px; // dimensione testo nome prodotto
            color: #000; // si può scegliere un colore dalla palette se necessario
          }
          .product-price {
            font-size: 14px; // dimensione testo prezzo prodotto
            color: #00A6A6; // utilizzare il colore turchese dalla palette
            font-weight: bold;
          }
        }
      }
    }
  }
  </style>
  