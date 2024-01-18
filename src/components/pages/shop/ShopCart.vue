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
    <div v-if="shop.cart.length > 0" class="shop-cart">
      <h5 class="cart-title">Carrello</h5>
      <ul class="list-group cart-list">
        <li v-for="item in shop.cart" :key="item.id" class="list-group-item cart-item">
          <div class="cart-item-details">
            <img :src="item.imageUrl" alt="..." class="cart-item-image">
            <div class="cart-item-text">
              {{ item.name }} - {{ item.quantity }} x {{ item.price | currency }}€
            </div>
          </div>
          <button @click="removeFromCart(item)" class="cart-item-remove">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
      <div class="cart-total">
        Totale: {{ shop.cartTotal | currency }}€
      </div>
      <div class="cart-actions">
        <button class="btn-view-cart">Vedi carrello</button>
        <button class="btn-checkout">Checkout</button>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .shop-cart {
    border: 1px solid #E2E3E7;
    border-radius: 0.25rem;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #EBECFF;
  
    .cart-title {
      color: #056282;
      margin-bottom: 1rem;
    }
  
    .cart-list {
      list-style: none;
      padding: 0;
      margin-bottom: 1rem;
  
      .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        background-color: #FFFFFF;
  
        .cart-item-details {
          display: flex;
          align-items: center;
  
          .cart-item-image {
            width: 50px;
            height: 50px;
            object-fit: cover;
            margin-right: 0.5rem;
          }
  
          .cart-item-text {
            color: #060D75;
          }
        }
  
        .cart-item-remove {
          background: none;
          border: none;
          color: #D95F2F;
  
          &:hover {
            color: #FF0000;
          }
  
          .fa {
            font-size: 1rem;
          }
        }
      }
    }
  
    .cart-total {
      font-size: 0.9rem;
      color: #060D75;
      margin-bottom: 1rem;
    }
  
    .cart-actions {
      display: flex;
      justify-content: space-between;
  
      .btn-view-cart, .btn-checkout {
        border: none;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
        font-size: 0.9rem;
  
        &:focus {
          outline: none;
        }
      }
  
      .btn-view-cart {
        background-color: #056282;
        color: #FFFFFF;
  
        &:hover {
          background-color: darken(#056282, 10%);
        }
      }
  
      .btn-checkout {
        background-color: #00A6A6;
        color: #FFFFFF;
  
        &:hover {
          background-color: darken(#00A6A6, 10%);
        }
      }
    }
  }
  </style>
  