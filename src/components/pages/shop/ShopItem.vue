<script>
  export default {
    name: 'ShopItem',
    props: ['product'],
  };
  </script>
<template>
    <div class="card w-100">
      <div v-if="product.sale" class="badge bg-danger position-absolute" style="top: 0.5rem; right: 0.5rem">Sale!</div>
      <img :src="product.imageUrl" class="card-img-top" alt="Product image">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text text-muted">{{ product.color }}</p>
        <div class="mt-auto">
          <p class="card-text">
            <span v-if="product.sale" class="text-decoration-line-through">{{ product.price | currency }}</span>
            <span class="fw-bold">{{ product.sale ? product.priceSale : product.price | currency }}</span>
          </p>
          <button class="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .card {
    border: none;
    transition: transform 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }
  
  .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-title {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .card-text {
    font-size: 0.9rem;
    margin-bottom: auto;
  }
  
  .btn-primary {
    margin-top: auto;
    background-color: #007bff;
    border: none;
    padding: 0.375rem 0.75rem;
  }
  
  .badge.bg-danger {
    background-color: #ff0000;
    color: #ffffff;
    padding: 0.5em;
    font-weight: bold;
  }
  </style>
  