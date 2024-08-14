import React from "react";
import "./Product.css";

const Product = ({ image, title, description, price, rating, onClick }) => {
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
        <button onClick={onClick} className="b-comprar">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;
