import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css"; 
import {useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate()
console.log(cart);

  const handleClearCart = () => {
    clearCart(); 
    navigate("/");
  };

    const handlePurchase = () => {
      clearCart();
      navigate("/processing-payment");

      setTimeout(() => {
        navigate("/confirmation");
      }, 5000); 
    };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.titleTarget}>
        <h2 className={styles.listTitle}>Tu carrito de compras</h2>
      </div>

      <div className={styles.targetContent}>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>
            Tu carrito de compras esta vacio.
          </p>
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

      {/* Condicion para ver el botón de compra solamente si hay */}
      {cart.length > 0 && (
        <div className={styles.buy_now}>
          <button className={styles.comprar_ahora} onClick={handlePurchase}>
            Comprar Ahora
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
