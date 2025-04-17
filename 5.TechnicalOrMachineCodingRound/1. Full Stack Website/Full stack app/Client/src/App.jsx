import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminPanel from "./Pages/AdminPanel";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import AddProduct from "./Pages/AddProduct";
import Products from "./Pages/Products"; // Importing Products component
import "./styles/global.css";
import "./components/Footer"
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      {/* <Products /> */}
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} /> {/* Adding Products route */}
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
