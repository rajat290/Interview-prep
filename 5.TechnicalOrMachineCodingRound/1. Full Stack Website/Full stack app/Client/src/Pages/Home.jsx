// ===== FRONTEND (src/pages/Home.jsx) =====
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/global.css";
import "../styles/form.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Product List</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col items-center"
          >
            <img
              src={product.imageUrl || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">{product.name}</h4>
            <p className="text-gray-600 mb-2 text-sm text-center">{product.description}</p>
            <p className="text-blue-600 font-bold text-lg mb-4">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
