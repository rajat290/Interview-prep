import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import "../styles/global.css";
import "../styles/navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🛒 MyShop</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;