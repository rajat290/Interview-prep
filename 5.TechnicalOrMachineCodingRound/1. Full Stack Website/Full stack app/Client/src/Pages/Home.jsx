// ===== FRONTEND (src/pages/Home.js) =====
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product._id} style={{ margin: 20, border: "1px solid #ccc", padding: 10 }}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;