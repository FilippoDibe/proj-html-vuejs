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
            <span v-if="product.sale" class="text-decoration-line-through prezzo">{{ product.price | currency }}€</span>
            <span class="fw-bold prezzo-scontato">{{ product.sale ? product.priceSale : product.price | currency }} €</span>
          </p>
        <i @click="$emit('add-to-cart', product)" class="fas fa-shopping-cart bottone"></i> 
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style  lang="scss" scoped>
  .card {
  border: none;
  background: #E2E3E7; 
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  height: 330px;
  justify-content: space-around;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &-img-top {
    height: 150px;
    object-fit: cover;
  }

  &-body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .card-title {
        font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .card-text {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #606D75; 
    }

    .price {
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .btn-primary {
      align-self: stretch;
      background-color: #007bff;
      border: none;
      &:hover {
        background-color: #0056b3;
      }
    }
    .prezzo-scontato{
        padding-left: 10px;
    }
  }
.bottone{
    color:#058283;
    padding: 10px;
    border-radius: 50%;
    background-color: #00a6a6ae;
}
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #058283;
    color: white;
    padding: 0.5em;
    font-weight: bold;
  }
}

  </style>
  
  