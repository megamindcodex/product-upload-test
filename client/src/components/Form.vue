<template>
  <div class="cont">
    <div class="form">
      <div class="form-group">
        <label>Product name:</label>
        <input type="text" v-model="formData.name" />
      </div>

      <div class="form-group">
        <label>Product price:</label>
        <input type="text" v-model="formData.price" />
      </div>

      <div class="form-group">
        <label>insert image URL</label>
        <input type="text" v-model="formData.productImageURL" @input="getImage" />
      </div>

      <div class="form-group">
        <div class="imgCont">
          <div class="image">
            <img :src="imageURL" alt="image here..." />
          </div>
        </div>
      </div>
    
      <div class="btn">
        <button @click="uploadImage">Add product</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        productImageURL: "",
        name: "",
        price: "",
      },
      imageURL: "",
    };
  },
  methods: {
    getImage() {
      this.imageURL = this.formData.productImageURL;
    },
    async uploadImage() {
      try {
        console.log(`data to be sent ${this.formData}`);
        const res = await axios.post("http://localhost:4500/api/createproduct", this.formData);

        if(res.status === 201) {
          this.formData =  {
          productImageURL: "",
          name: "",
          price: "",
        }
        console.log(res.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: rgb(202, 218, 218);
  margin-top: 5rem;
  padding: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
}

input[type="text"] {
  margin-top: 1rem;
  width: 100%;
  padding: 0.6rem;
  border-radius: 2.7px;
  border: none;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: orange; */
}

.imgCont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.549);
  width: 260px;
  height: 160px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
}

.image img {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  object-fit: initial;
  border-radius: 5px;
}

.btn button {
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  width: 35%;
  border: none;
  border-radius: 3px;
}
</style>
