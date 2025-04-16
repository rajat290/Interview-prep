import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item._id} style={{ marginBottom: 10 }}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.qty}
            onChange={(e) => updateQty(item._id, e.target.value)}
            min="1"
          />
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;