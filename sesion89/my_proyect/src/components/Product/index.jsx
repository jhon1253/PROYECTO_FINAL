import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Product.css";
import Target from "../../modal-target/Target";

const Product = ({ id, image, title, description, price, rating }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isUserLoggedIn = true; // Cambia esto según tu lógica de autenticación

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const product = {
    id,
    image,
    title,
    description,
    price,
    rating,
  };

  return (
    <>
      <div className="product-card" onClick={handleOpenModal}>
        <div className="portada">
          <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-data">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="product-numbers">
          <p className="price">
            ${price}{" "}
            <span className="price-before">
              {" "}
              ${(price + price / 2).toFixed(2)}
            </span>
          </p>
          <p className="rating">{rating?.rate || ""}</p>
        </div>
      </div>

      {isModalOpen && (
        <Target
          product={product}
          onClose={handleCloseModal}
          addToCart={addToCart}
          isUserLoggedIn={isUserLoggedIn}
        />
      )}
    </>
  );
};

export default Product;
