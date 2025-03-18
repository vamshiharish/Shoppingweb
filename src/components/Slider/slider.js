import React, { useState, useEffect } from 'react';
import './slider.css';

import banner1 from '../images/banner-1.jpg';
import banner2 from '../images/banner-2.jpg';


const Carousel = () => {

    const images = [
        banner1, banner2
    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(autoplayInterval); 
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;