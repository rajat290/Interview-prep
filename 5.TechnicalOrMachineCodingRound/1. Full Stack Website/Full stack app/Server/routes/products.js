// ===== BACKEND (routes/products.js) =====
const express = require("express");
const Product = require("../models/Product");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

// Public - Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Admin - Add new product
router.post("/add", authMiddleware, isAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json({ msg: "Product added" });
});

// Admin - Update product
router.put("/:id", authMiddleware, isAdmin, async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Product updated" });
});

// Admin - Delete product
router.delete("/:id", authMiddleware, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Product deleted" });
});

module.exports = router;
