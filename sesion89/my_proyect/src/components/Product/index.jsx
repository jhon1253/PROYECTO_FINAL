import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Ajusta la ruta según tu estructura
import "./Product.css";

const Product = ({ image, title, description, price, rating }) => {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    const product = { image, title, description, price, rating, id: title }; // Aquí asumimos que el título es único para simplificar
    addToCart(product);
  };

  return (
    <div className="product-card">
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
      <div className="div_btn-comprar">
        <button onClick={handleClick} className="b-comprar">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;
