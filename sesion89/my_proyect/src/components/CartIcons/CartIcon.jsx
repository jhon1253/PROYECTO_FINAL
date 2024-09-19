import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./CartIcon.module.css";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../../fireBase/credenciales"; 
const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [User, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Usuario no encontrado");
        setUser(null); 
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(cart);


  const totalItems =
    cart.id_producto?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const pagCart = () => {
    navigate("Cart");
  };

  return (
    <>
      {User && ( //solo se ve el carrito si hay un usuario
        <div className={styles.cartIcon}>
          <span onClick={pagCart}>
            <i
              className={`${styles.cartIconIcon} bi bi-cart4`}
              onClick={() => setShowCart(!showCart)}
            ></i>
          </span>

          {totalItems > 0 && (
            <span className={styles.cartIconBadge}>{totalItems}</span>
          )}
          {showCart && (
            <div className="targeta">
              <div className={styles.cartIconModal}>
                <Cart />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartIcon;
