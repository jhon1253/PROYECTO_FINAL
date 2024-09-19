import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { auth } from "../../fireBase/credenciales";
import "./Product.css";
import { onAuthStateChanged } from "firebase/auth";

const Product = ({ id, image, title, description, price, rating }) => {
  const { addToCart } = useContext(CartContext);
  const [User, setUser] = useState(null);
  

  const handleClick = () => {
    const product = {
      id,
      image,
      title,
      description,
      price,
      rating,
    };
    addToCart(product);
  };


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Usuario no encontrado");
      }
    });
    // Limpia la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

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

        {User ? ( //solo se ve el el boton de agg si hay un usuario
        <button onClick={handleClick} className="b-comprar">
          Agregar la carrito
        </button>

        ): null }
      </div>
    </div>
  );
};

export default Product;





