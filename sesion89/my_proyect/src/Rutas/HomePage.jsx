import React, { useState, useEffect } from "react";
import "../HomePage.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        ‹
      </button>
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default carousel;
