import React from "react";
import "./Target.css";

function Target({ product, onClose, addToCart, isUserLoggedIn }) {
  if (!product) return null;

  const handleAddToCart = () => {
    if (isUserLoggedIn) {
      addToCart(product);
      onClose(); // Cerrar el modal después de agregar al carrito
    } else {
      alert("Por favor, inicia sesión para agregar productos al carrito.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose} role="button" tabIndex={0}>
          &times;
        </span>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} className="modal-image" />
        <button onClick={handleAddToCart} className="b-comprar">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Target;
