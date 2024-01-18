import { ref, watch } from 'vue';
import {reactive } from 'vue';
//////////////////////////////////////////////
//                                          //
// INIZIO SCRIPT PER COMPONENTE HEADER      //
//                                          //
//////////////////////////////////////////////
export const isScrolled = ref(false);
export const isHidden = ref(false);
export const isTransparent = ref(true); 


var lastScrollPosition = 0;
var hideTimeout;


function navScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    isScrolled.value = currentScrollPosition > 0;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        isScrolled.value = true;
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            isHidden.value = true;
        }, 1500);
        isTransparent.value = true; 
    } else {
        isScrolled.value = false;
        clearTimeout(hideTimeout);
        isHidden.value = false;
        isTransparent.value = currentScrollPosition === 0; 
    }

    lastScrollPosition = currentScrollPosition;
}


watch(() => {
    window.addEventListener('scroll', navScroll);
});

export function setupScrollListener() {
    window.addEventListener('scroll', navScroll);
}

export function removeScrollListener() {
    window.removeEventListener('scroll', navScroll);
}
//////////////////////////////////////////////
//                                          //
// INIZIO SCRIPT PER COMPONENTE SHOP        //
//                                          //
//////////////////////////////////////////////


export const shop = reactive({
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
  minPrice: 0,
  maxPrice: 2000,
  setCategory(category) {
    this.selectedCategory = category;
    this.filterProducts();
},
setTag(tag) {
    this.selectedTag = tag;
this.filterProducts();
},
setPriceRange(minPrice, maxPrice) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
},
getFilteredProducts() {
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


  getCategories(){
    const categories = new Set();
    this.products.forEach(product => {
      categories.add(product.categorie.general);
      if (product.categorie.spec) {
        categories.add(product.categorie.spec);
      }
    });
    return Array.from(categories);
  },

  getTags(){
    const tags = new Set();
    this.products.forEach(product => {
      tags.add(product.color);
    });
    return Array.from(tags);
  }

});


















    
     