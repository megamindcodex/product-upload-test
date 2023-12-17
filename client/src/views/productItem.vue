<template>
  <div class="cont">
      <div class="product" v-if="product">
          <div class="image">
            <img :src="product.productImageURL" :alt="product.name" />
          </div>
        <div class="desc">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <div class="btn">
            <button @click="deleteProduct">delete</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        this.getProductItem()
    },
    methods: {
        async getProductItem() {
            try {
                const productId = this.$route.params.id
                const res = await axios.get(`http://localhost:4500/api/productitem/${productId}`)

                if(res.status === 200) {
                    console.log(res.data)
                    this.product = res.data
                }
            }catch(err) {
                console.log("Failed to get product item:", err.message)
            }
        },
        async deleteProduct() {
          try {
            const productId = this.$route.params.id
            const res = await axios.post('http://localhost:4500/api/deleteproduct/' + productId)

            if(res.status === 200) {
              console.log("Product deleted")
              this.$router.push('/products')
            }

          }catch(err) {
            console.log("Failed to delete product:", err.message)
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
  row-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.productCont h3 {
  margin: 0; /* Remove default margin for better alignment */
}

.productCont p {
  margin: 0; /* Remove default margin for better alignment */
}

.btn {
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    padding: 10px;
    /* background: crimson; */
}

.btn button {
    font-weight: bolder;
    font-size: 1rem;
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: crimson;
}

.btn button:hover  {
  background-color: rgb(194, 17, 53);
}


</style>