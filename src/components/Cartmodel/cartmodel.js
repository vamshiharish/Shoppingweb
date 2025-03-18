import React from 'react';
import './cartmodel.css';

const CartModal = ({ cart, removeFromCart, closeCart }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.count}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button onClick={closeCart}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;