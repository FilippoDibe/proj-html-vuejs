<script>


export default{
    name: 'AppShop',
   data(){
    return{
         products:[
         {
            id: 1,
            name: "Jordan Air 1 Mid",
            price: 115.00,
            color: "Black/Red"
        },
        {
            id: 2,
            name: "Jordan Air 1 Retro High",
            price: 160.00,
            color: "Blue/White"
        },
        {
            id: 3,
            name: "Jordan Air 1 Low",
            price: 100.00,
            color: "Black/White"
        },
        {
            id: 4,
            name: "Jordan Air 1 Mid SE",
            price: 125.00,
            color: "Yellow/Black"
        },
        {
            id: 5,
            name: "Jordan Air 1 Retro High OG",
            price: 170.00,
            color: "Black/White"
        },
        {
            id: 6,
            name: "Jordan Air 1 Mid SE Turf Orange",
            price: 130.00,
            color: "Orange/Black"
        },
        {
            id: 7,
            name: "Jordan Air 1 High Zoom Air CMFT",
            price: 175.00,
            color: "Green/Black"
        },
        {
            id: 8,
            name: "Jordan Air 1 Low SE",
            price: 110.00,
            color: "Purple/White"
        },
        {
            id: 9,
            name: "Jordan Air 1 Mid Light Smoke Grey",
            price: 120.00,
            color: "Grey/White"
        },
        {
            id: 10,
            name: "Jordan Air 1 Retro High Dior",
            price: 2000.00,
            color: "Grey/White"
        }
    ]
    }
   }
}
</script>


<template>
    <div class="container my-5">
      <!-- Header: Showing results and sorting -->
      <div class="row mb-3 align-items-center">
        <div class="col-6">
          <span>Showing 1–9 of 10 results</span>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <select class="form-select w-auto">
            <option selected>Default sorting</option>
            <option value="price-asc">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>
      
      <!-- Main content area -->
      <div class="row">
        <!-- Product grid -->
        <div class="col-md-9">
          <div class="row">
            <!-- Dynamic product cards -->
            <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
              <div class="card">
                <!-- Assume all products are on sale for demonstration -->
                <div class="position-absolute top-0 start-0 bg-danger text-white p-2">Sale!</div>
                <!-- Placeholder image -->
                <img :src="`https://via.placeholder.com/200x200.png?text=${product.name}`" class="card-img-top" :alt="product.name">
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">{{ product.color }}</p>
                  <p class="card-text">${{ product.price }}</p>
                  <a href="#" class="btn btn-primary">Add to Cart <i class="fa fa-shopping-cart"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Sidebar placeholders for demonstration -->
        <div class="col-md-3">
          <div class="mb-4">
            <h5>Filter by Price</h5>
            <input type="range" class="form-range" id="priceRange" value="50" min="0" max="150" @input="updatePriceFilter">
            <p class="text-center">${{ priceFilterMin }} - ${{ priceFilterMax }}</p>
          </div>
          <div class="mb-4">
            <h5>On-sale Products</h5>
            <!-- Placeholder for on-sale products -->
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action" v-for="product in products.filter(p => p.price < 150)" :key="product.id">
                {{ product.name }} - <strong>${{ product.price }}</strong>
              </a>
            </div>
          </div>
          <!-- Other sidebar content omitted for brevity -->
        </div>
      </div>
    </div>
  </template>



<style lang="scss" scoped>
    .total{
        margin-top: 300px;
    
    }
</style>