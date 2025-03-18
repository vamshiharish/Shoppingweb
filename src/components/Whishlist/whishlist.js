import React from 'react';
import './whishlist.css';

const Wishlist = ({ wishlist, closeWishlist }) => {
  return (
    <div className="wishlist-modal">
      <div className="wishlist-content">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))
        )}
        <button onClick={closeWishlist}>Close</button>
      </div>
    </div>
  );
};

export default Wishlist;