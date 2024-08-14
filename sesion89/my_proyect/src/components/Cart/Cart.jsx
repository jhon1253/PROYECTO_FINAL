import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css"; // Importa el CSS module

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.listTitle}>LIST PRODUCTS</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>PRODUCT BASKET</p>
      ) : (
        <div>
          {cart.map((product, idx) => (
            <div key={idx} className={styles.productItem}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <button
                className={styles.button}
                onClick={() => removeFromCart(product)}
              >
                Eliminar del carrito
              </button>
            </div>
          ))}
          <button className={styles.button} onClick={() => clearCart()}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
