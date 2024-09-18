import React, { useEffect, useState } from "react";
import "./Target.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../fireBase/credenciales";
import Logearse from "../components/Login/Login";
function Target({ product, onClose, addToCart, isUserLoggedIn }) {
  if (!product) return null;
  const [User, setUser] = useState(null);
  const [Login, setLogin] = useState(null);
  const handleAddToCart = () => {
    if (isUserLoggedIn) {
      addToCart(product);
      onClose(); // Cerrar el modal después de agregar al carrito
    } else {
      alert("Por favor, inicia sesión para agregar productos al carrito.");
    }
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose} role="button" tabIndex={0}>
          &times;
        </span>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} className="modal-image" />
        {User ? (
          <button onClick={handleAddToCart} className="b-comprar">
            Agregar al carrito
          </button>
        ) : (
          <button onClick={() => setLogin(true)} className="b-comprar">
            Registrate
          </button>
        )}
        {Login && (
          <>
            <Logearse setMostrarFormulario={setLogin} />
          </>
        )}
      </div>
    </div>
  );
}

export default Target;
