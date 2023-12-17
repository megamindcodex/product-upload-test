<template>
  <div class="cont">
    <div class="productCont" v-if="this.products.length > 0">
      <div class="product" v-for="product in products" :key="product._id">
          <div class="image">
            <img :src="product.productImageURL" :alt="product.name" />
          </div>
        <div class="desc">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <RouterLink :to="'/productitem/' + product._id">more details -></RouterLink>
        </div>
      </div>
    </div>
    <div class="productCont" v-else>
      <h3>No Products Found</h3>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      try {
        const res = await axios.get('http://localhost:4500/api/products')

        if(res.status === 200) {
          // console.log(res.data)
          this.products = res.data
        }
      }catch(err) {
        console.log("Failed to get products:", err.message)
      }
    }
  }

}
</script>



<style scoped>

.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.productCont {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px; /* Adjust gap as needed */
  justify-content: center;
  width: 80%;
}

.product {
  display: grid;
  grid-template-rows: 1fr auto; /* Ensure the image takes up available space */
  border: 1px solid #ccc; /* Add border for better separation */
}

.image {
  width: 100%;
  overflow: hidden; /* Ensure images don't exceed their container */
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Maintain aspect ratio and cover the container */
}

.desc {
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.productCont h3 {
  margin: 0; /* Remove default margin for better alignment */
}

.productCont p {
  margin: 0; /* Remove default margin for better alignment */
}


</style>
