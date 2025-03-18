import React, { useState, useEffect } from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartPulse, faTrash } from '@fortawesome/free-solid-svg-icons';

const Product = ({ cart, addToCart, removeFromCart, wishlist, toggleWishlist, increaseCount }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <h1 className='heading-spcl'>Special Products For You</h1>
      <div className='horizantal-line-div'>
        <span></span>
        <span></span>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className='whishlist-icon-top'>
              <span
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)}
              >
                <FontAwesomeIcon
                  icon={wishlist.some((item) => item.id === product.id) ? faHeart : faHeartPulse}
                  style={{ color: wishlist.some((item) => item.id === product.id) ? 'red' : 'black' }}
                />
              </span>
            </div>
            <div>
              <img src={product.image} alt={product.title} />
              <h3 className='product-title-name'>{product.title} </h3>
              <p className='product-title-price'>From ${product.price}</p>
              {cart.some((item) => item.id === product.id) ? (
                <div>
                  <div className='remove-div'>
                    <div onClick={() => removeFromCart(product.id)}><FontAwesomeIcon icon={faTrash} /></div>
                    <div>{cart.find((item) => item.id === product.id).count}</div>
                    <div onClick={() => increaseCount(product.id)}>+</div>
                  </div>
                  <div>
                    <p style={{color: "green"}}>Added to cart</p>
                  </div>
                </div>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;