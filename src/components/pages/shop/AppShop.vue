<script>


export default{
    name: 'AppShop',
   data(){
    return{
      products: [
        {
          id: 1,
          name: "Jordan Air 1 Mid",
          price: 115.00,
          priceSale:   90.00,
          sale:true,
          categorie:{
            general:"sneakers",
            spec: "mid"
          },
          color: "Black/Red",
          imageUrl: "https://cdn.idealo.com/folder/Product/201072/2/201072242/s10_produktbild_gross/nike-air-jordan-1-mid-black-white-gym-red.jpg",
        },
        {
          id: 2,
          name: "Jordan Air 1 Retro High",
          price: 480.00,
          sale:false,
          categorie:{
            general:"sneakers",
            spec: "high"
          },
          color: "Blue/White",
          imageUrl: "https://23brickstreet.it/wp-content/uploads/2022/03/JORDAN-1-RETRO-HIGH-WHITE-UNIVERSITY-BLUE-BLACK-LATO-ESTERNO.webp",
        },
        {
          id: 3,
          name: "Jordan Air 1 Low",
          price: 100.00,
          sale: true,
          categorie:{
            general:"sneakers",
            spec: "low"
          },
          priceSale:   80.00,
          color: "Black/White",
          imageUrl: "https://cdn.shopify.com/s/files/1/2358/2817/files/jordan-air-jordan-1-low-wmns-panda_20032224_45658700_2048.png?v=1687428785&width=1940",
        },
        {
          id: 4,
          name: "Jordan Air 1 Mid SE",
          price: 125.00,
          sale:true,
          categorie:{
            general:"sneakers",
            spec: "mid"
          },
          priceSale:    100.00,
          color: "Yellow/Black",
          imageUrl: "https://www.kickgame.com/cdn/shop/products/nike-air-jordan-1-mid-yellow-toe-black-852542-071_1.png?v=1662538778&width=1024",
        },
        {
          id: 5,
          name: "Jordan Air 1 Retro High OG",
          price: 230.00,
          sale:false,
          categorie:{
            general:"sneakers",
            spec: "high"
          },
          color: "Black/White",
          imageUrl: "https://it.oneblockdown.it/cdn/shop/products/BQ4422-001_2_0205e681-63c0-41d5-a826-08befa01bc4c_600x.png?v=1675848978",
        },
        {
          id: 6,
          name: "Jordan Air 1 Mid SE Turf Orange",
          price: 130.00,
          sale:false,
          categorie:{
            general:"sneakers",
            spec: "mid"
          },
          color: "Orange/Black",
          imageUrl: "https://kaufmanngriffe.it/articoli/005196/555da9afae1d67106e8fc25688e3b24df1c693b6.jpg",
        },
        {
          id: 7,
          name: "Jordan Air 1 High Zoom Air CMFT",
          price: 280.00,
          sale:true,
          categorie:{
            general:"sneakers",
            spec: "high"
          },
          priceSale:125.00,
          color: "Green/Black",
          imageUrl: "https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-high-zoom-air-cmft-stadium-green-168487.png?v=1638812598",
        },
        {
          id: 8,
          name: "Jordan Air 1 Low SE",
          price: 110.00,
          categorie:{
            general:"sneakers",
            spec: "low"
          },
          sale:false,
          color: "Purple/White",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B08vsYntkqfT8zXUddXTu_Kt2BioTjhr_LtU8E-wltXVt_X0qYKLaJOOs5yhO80hULg&usqp=CAU",
        },
        {
          id: 9,
          name: "Jordan Air 1 Mid Light Smoke Grey",
          price: 120.00,
          sale:false,
          categorie:{
            general:"sneakers",
            spec: "mid"
          },
          color: "Grey/White",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElCPrw7_WwKycmFvff5gCstcGUO9XLp7trw&usqp=CAU",
        },
        {
          id: 10,
          name: "Jordan Air 1 Retro High Dior",
          price: 2000.00,
          sale:false,
          categorie:{
            general:"sneakers",
            spec: "high"
          },
          color: "Grey/White",
          imageUrl: "https://www.rick.srl/cdn/shop/products/air-jordan-1-high-dior-476140.png?v=1682807644&width=700",
        }
      ],
      selectedCategory: null,
      selectedTag: null,
      minPrice:0,
      maxPrice:2000,
      filteredPricesProducts: []
    };
  },
  computed: {
    filteredProducts() {
    let result = this.products;

    // Applica il filtro per categorie o tag
    if (this.selectedCategory) {
      result = result.filter(product => product.categorie.general === this.selectedCategory || product.categorie.spec === this.selectedCategory);
    } else if (this.selectedTag) {
      result = result.filter(product => product.color.includes(this.selectedTag));
    }

    // Applica il filtro per prezzo
    result = result.filter(product => {
      const price = product.sale ? product.priceSale : product.price;
      return price >= this.minPrice && price <= this.maxPrice;
    });

    return result;
  },
    uniqueCategories() {
      const categories = new Set();
      this.products.forEach(product => {
        categories.add(product.categorie.general);
        if (product.categorie.spec) {
          categories.add(product.categorie.spec);
        }
      });
      return Array.from(categories);
    },
    uniqueTags() {
      const tags = new Set();
      this.products.forEach(product => {
        tags.add(product.color);
      });
      return Array.from(tags);
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.selectedTag = null;
    },
    selectTag(tag) {
      this.selectedTag = tag;
      this.selectedCategory = null;
    },
     applyPriceFilter() {
      this.filteredProducts = this.products.filter(product => {
        const price = product.sale ? product.priceSale : product.price;
        return price >= this.minPrice && price <= this.maxPrice;
      });
    }
    
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  },
  
  
};
</script>

<template>
  <div class="container total my-5">
    <div class="row">
      <!-- Product Grid -->
      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-4 d-flex align-items-stretch mb-4" v-for="product in filteredProducts" :key="product.id">
            <div class="card w-100">
              <!-- Sale Badge -->
              <div v-if="product.sale" class="badge bg-danger position-absolute" style="top: 0.5rem; right: 0.5rem;">Sale!</div>
              <!-- Product Image -->
              <img :src="product.imageUrl" class="card-img-top" alt="...">
              <!-- Product Details -->
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
          </div>
        </div>
      </div>
      <!-- Sidebar -->
      <div class="col-lg-3">
        <!-- Filter by Price -->
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

        <!-- On-sale Products -->
        <div class="border p-3 mb-4">
          <h5 class="mb-3">On-sale Products</h5>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" v-for="product in products.filter(p  => p.sale)" :key="product.id">
              {{ product.name }} - <span class="fw-bold">{{ product.priceSale | currency }} </span>
            </a>
          </div>
        </div>
        <!-- Product Categories -->
        <div class="border p-3 mb-4">
          <h5 class="mb-3">Product Categories</h5>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" v-for="category in uniqueCategories" :key="category" @click.prevent="selectCategory(category)">
              {{ category }}
            </a>
          </div>
        </div>
        <!-- Product Tags -->
        <div class="border p-3">
          <h5 class="mb-3">Product Tags</h5>
          <div class="d-flex flex-wrap">
            <a href="#" class="badge bg-secondary m-1" v-for="tag in uniqueTags" :key="tag" @click.prevent="selectTag(tag)">
              {{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .total {
  padding-top: 200px;
}

.card {
  border: none;
  transition: transform 0.3s ease;
  height: 100%; // Assicura che tutte le card abbiano la stessa altezza
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }

  &-img-top {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }

  &-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    .card-title {
      font-size: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .card-text {
      font-size: 0.9rem;
      margin-bottom: auto; // Spinge verso il basso tutto ciò che segue
    }
  }

  .btn-primary {
    margin-top: auto; // Si posiziona alla fine del contenitore flex
    background-color: #007bff;
    border: none;
    padding: 0.375rem 0.75rem;
  }
}

.badge {
  &.bg-danger {
    background-color: #ff0000;
    color: #ffffff;
    padding: 0.5em;
    font-weight: bold;
  }
}

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

// Stili aggiuntivi per la sidebar
.border {
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
  
  h5 {
    margin-bottom: 3rem;
  }

  .form-range {
    // Stili personalizzati per il range slider se necessario
  }

  .list-group {
    // Stili aggiuntivi per i gruppi di elenchi se necessario
  }

  .badge {
    font-size: 0.8rem;
    margin: 0.2rem;
  }
}

// Personalizza ulteriormente la scrollbar se necessario
::-webkit-scrollbar {
  width: 0.4rem;
  
  &-track {
    background: #f1f1f1;
  }

  &-thumb {
    background: #888;
    
    &:hover {
      background: #555;
    }
  }
}

</style>