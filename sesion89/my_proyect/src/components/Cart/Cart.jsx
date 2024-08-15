import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css"; // Importa el CSS module

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <div className="titleTarget">
        <h2 className={styles.listTitle}>LIST PRODUCTS</h2>
      </div>

      <div className="targetContent">
        {cart.map((product, idx) => (
          <div key={idx} className={styles.productItem}>
            <p>{product.title}</p>
            <img src={product.image} alt="" />
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
      </div>


      <div>
        <button className={styles.button} onClick={() => clearCart()}>
          Vaciar carrito
        </button>
      </div>

      
    </div>
  );
};

export default Cart;
