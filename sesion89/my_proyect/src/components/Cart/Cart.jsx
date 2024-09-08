import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css"; // Importa el CSS module
import {useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate()
console.log(cart);

  const handleClearCart = () => {
    clearCart(); // Vacía el carrito
    navigate("/"); // Redirige a la página principal
  };

    const handlePurchase = () => {
      clearCart();
      navigate("/processing-payment");

      setTimeout(() => {
        navigate("/");
      }, 5000); // Ajusta el tiempo según lo necesites
    };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.titleTarget}>
        <h2 className={styles.listTitle}>You Shopping Cart</h2>
      </div>

      <div className={styles.targetContent}>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>Your cart Shopping is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <h3 className={styles.productName}>{product.name}</h3>
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />

              {/* <p>{product.description}</p> */}
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <p>Cantidad: {product.quantity}</p>
              <button
                className={styles.button}
                onClick={() => removeFromCart(product)}
                aria-label={`Remove ${product.name} from cart`}
              >
                Eliminar Producto
              </button>
            </div>
          ))
        )}
      </div>

      <div className={styles.clearButtonContainer}>
        <button
          className={styles.button}
          onClick={handleClearCart}
          aria-label="Clear all items from cart"
        >
          Vaciar Carrito
        </button>
       </div>

       <div className={styles.buy_now}>
        <button
        className={styles.comprar_ahora}
        onClick={handlePurchase}>
          Comprar Ahora
        </button>
       </div>

      </div>

  );
};

export default Cart;
