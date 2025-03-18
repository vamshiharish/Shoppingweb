import React from 'react';
import "./productfetailmodalitem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartPulse, faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductDetailsModalIteam = ({ product, closeModal, addToCart, removeFromCart, toggleWishlist, cart, wishlist }) => {
  const isInCart = cart.some((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="product-details-modal">
      <div className="product-details-content">
        <button className="close-buttons" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="product-details">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="actions">
            {isInCart ? (
              <button className="remove-from-cart" onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            )}
            <button className="wishlist-button" onClick={() => toggleWishlist(product)}>
              <FontAwesomeIcon icon={isInWishlist ? faHeart : faHeartPulse} style={{ color: isInWishlist ? 'red' : 'black' }} />
              {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModalIteam;