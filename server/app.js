// middleware to parse json in the request body

// Enable CORS for for all routes

// connect to mongodb database

// create a new blog in the blog collection....route

// Get all blogs from the database....route

// Get specific blog details from the database....route

// Delete blog from the database by Id....route

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Product = require("./models/product");

const app = express();
const port = 4500;

// middleware to parse json in the request body
app.use(bodyParser.json());

// Enable CORS for for all routes
app.use(cors());

// connect to mongodb database
const dbURI = "mongodb://127.0.0.1:27017/productItems";
mongoose.connect(dbURI).then(() => {
  console.log("connected to database");
  app.listen(port, console.log(`server listening on port: ${port}`));
});

// create a new product in the products collection....route
app.post("/api/createproduct", async (req, res) => {
  try {
    const formData = req.body;
    // console.log("data to be created:", formData)
    const product = await Product.create(formData);
    res.status(201).json(product);
    console.log("product created successfully", product);
  } catch (err) {
    console.log("Error creating product", err.message);
  }
});

// Get all Products from the database....route
app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find();
    if (product) {
      res.status(200).json(product);
      // console.log("All Product found", product);
    }
  } catch (err) {
    console.log("Error getting products:", err.message);
  }
});



// Get specific product details from the database....route
app.get('/api/productitem/:id', async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findById(productId); 
    if(product) {
      console.log("Product found", product);
      res.status(200).json(product);  
    }else {
      console.log("Product not found");
      res.status(404).json({message: "product not found"})
    }

  }catch (err) {
    console.log("Error getting product:", err.message)
    res.status(500).json({ message: "Internal Server Error" });
  }
})



// Delete product from the database by Id....route
app.post('/api/deleteproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findByIdAndDelete(productId)

  res.status(200).json({message: `Product with the id ${productId} has been deleted`})

  }catch(err) {
    console.log("Error deleting product:", err.message)
    res.status(500).json({ error: "Internal Server Error" });
  }
})
