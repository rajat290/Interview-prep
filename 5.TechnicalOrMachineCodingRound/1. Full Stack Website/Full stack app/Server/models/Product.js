// ===== BACKEND (models/Product.js) =====
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  quantity: Number,
  category: String,
  tags: [String],
});

module.exports = mongoose.model("Product", productSchema);