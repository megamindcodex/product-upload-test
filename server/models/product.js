
// import mongoose
// Define the product Schema field here
// Create and export the Product model Schema

// import mongoose
const mongoose = require('mongoose')

// Define the product Schema field here
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productImageURL: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// create and export the Product model shema
const Product = mongoose.model('Products', productSchema);

module.exports = Product;