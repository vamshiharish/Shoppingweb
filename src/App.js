import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Carousel from './components/Slider/slider';
import Product from './components/Product/product';
import Wishlist from './components/Whishlist/whishlist';
import CartModal from './components/Cartmodel/cartmodel';
import Newsletter from './components/Newsletter/newsletter';
import Footer from './components/Footer/footer';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Increase product count in cart
  const increaseCount = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const cartCount = cart.length;

  return (
    <div className="App">
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        openCartModal={() => setIsCartOpen(true)}
        openWishlistModal={() => setIsWishlistOpen(true)}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        toggleWishlist={toggleWishlist}
        cart={cart}
        wishlist={wishlist}
      />
      <Carousel />
      <Product
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        increaseCount={increaseCount}
      />
      {isCartOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} closeCart={() => setIsCartOpen(false)} />
      )}
      {isWishlistOpen && (
        <Wishlist wishlist={wishlist} closeWishlist={() => setIsWishlistOpen(false)} />
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;