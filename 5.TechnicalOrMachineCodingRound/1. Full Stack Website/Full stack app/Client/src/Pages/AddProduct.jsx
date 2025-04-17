// src/pages/AddProduct.jsx
import React, { useState } from "react";

const API_BASE = "http://localhost:5000/api"; // Update if needed

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    quantity: "",
    category: "",
    tags: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE}/products/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // 🔐 send token to authenticate
        },
        body: JSON.stringify({
          ...product,
          price: Number(product.price),
          quantity: Number(product.quantity),
          tags: product.tags.split(",").map((tag) => tag.trim()),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Product added successfully!");
        setProduct({
          name: "",
          description: "",
          price: "",
          imageUrl: "",
          quantity: "",
          category: "",
          tags: "",
        });
      } else {
        alert("❌ " + data.msg);
      }
    } catch (err) {
      alert("Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={product.name} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} value={product.description} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} value={product.price} required />
        <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} value={product.imageUrl} required />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} value={product.quantity} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} value={product.category} required />
        <input type="text" name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} value={product.tags} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
