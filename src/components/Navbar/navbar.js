import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import logo from "../images/logo.png";
import ProductDetailsModalIteam from "../ProductdetailmodalItem/productdetailmodalitem";

// console.log(ProductDetailsModal);

function Navbar({ cartCount, wishlistCount, openCartModal, openWishlistModal, addToCart, removeFromCart, toggleWishlist, cart, wishlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      ) 
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => {
    setSelectedProduct(null); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logopng" src={logo} alt="logo" />
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="div-icon">
          <FontAwesomeIcon style={{ fontSize: '20px', color: '#fff' }} className="searchicon" icon={faMagnifyingGlass} />
        </div>
        {searchTerm && (
          <ol className="search-results">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="search-item" onClick={() => handleProductClick(product)}>
                  {product.title}
                </li>
              ))
            ) : (
              <li className="no-results">No products found</li>
            )}
          </ol>
        )}
      </div>

      <div className="menu">
        <div className="menu-item">
          <FontAwesomeIcon icon={faUser} />
          <span>Tim</span>
        </div>
        <div className="menu-item" onClick={openWishlistModal}>
          <FontAwesomeIcon icon={faHeart} />
          <span className="badge badge-whish">{wishlistCount}</span>
          <span>Wishlist</span>
        </div>
        <div className="menu-item" onClick={openCartModal}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="badge badge-shop">{cartCount}</span>
          <span>Cart</span>
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsModalIteam
          product={selectedProduct}
          closeModal={closeModal}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          toggleWishlist={toggleWishlist}
          cart={cart}
          wishlist={wishlist}
        />
      )}
    </nav>
  );
}

export default Navbar;