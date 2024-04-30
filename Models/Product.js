const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    size: {
        type: [String],
        default: []
    },
    newPrice: {
        type: String,
        required: true
    },
    prevPrice: {
        type: String,
        required: true
    },
    star: {
        type: [Number],
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    reviews: {
        type: String,
        required: true
    },
    color: {
        type: [String],
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
