// ===== FRONTEND (src/pages/AdminPanel.js) =====
import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [product, setProduct] = useState({ name: "", price: 0, description: "", imageUrl: "" });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/products/add", product, {
      headers: { Authorization: token },
    });
    alert("Product added");
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input placeholder="Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AdminPanel;