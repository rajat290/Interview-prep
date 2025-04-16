// ===== FRONTEND (src/pages/Register.js) =====
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", user);
    alert("Registered successfully");
  };

  return (
    <form onSubmit={handleRegister}>
      <input placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;