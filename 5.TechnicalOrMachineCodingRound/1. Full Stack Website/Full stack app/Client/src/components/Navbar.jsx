import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/admin">Admin</Link>
      <Link to="/cart">Cart</Link>

    </nav>
  );
};

export default Navbar;