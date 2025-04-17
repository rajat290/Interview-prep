import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: 0, description: "", imageUrl: "" });
  const [productList, setProductList] = useState([]); // State to hold added products

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token || role !== "admin") {
      alert("Access denied! Admins only.");
      navigate("/login");
    }
  }, [navigate]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/api/products/add", product, {
        headers: { Authorization: token },
      });
      setProductList([...productList, product]); // Add product to the list
      alert("Product added");
      setProduct({ name: "", price: 0, description: "", imageUrl: "" }); // Reset form
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddProduct} className="p-8 max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Add New Product</h2>
        <input
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          placeholder="Description"
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          placeholder="Image URL"
          onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </form>

      {/* Display added products */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Added Products</h3>
        <ul>
          {productList.map((prod, index) => (
            <li key={index} className="border-b py-2">
              <h4 className="font-bold">{prod.name}</h4>
              <p>Price: ${prod.price}</p>
              <p>Description: {prod.description}</p>
              <img src={prod.imageUrl} alt={prod.name} className="w-32 h-32 object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
