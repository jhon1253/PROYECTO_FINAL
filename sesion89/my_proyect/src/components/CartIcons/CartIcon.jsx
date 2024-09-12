import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./CartIcon.module.css";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Verifica la estructura del carrito con un console.log
  console.log(cart);

  // Ajusta la forma en que calculas el totalItems según la estructura de tu carrito
  const totalItems =
  cart.id_producto?.reduce((total, product) => total + product.quantity, 0) || 0;

  const pagCart = () => {
    navigate("Cart");
  };
  return (
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
  );
};

export default CartIcon;
