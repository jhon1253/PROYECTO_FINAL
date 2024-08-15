import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Cart.module.css"; // Importa el CSS module

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.titleTarget}>
        <h2 className={styles.listTitle}>You Shopping Cart</h2>
        {/* Opcional: Aquí puedes agregar otros elementos como un subtítulo o información adicional */}
      </div>

      <div className={styles.targetContent}>
        {cart.length === 0 ? (
          <p className={styles.emptyMessage}>Your cart Shopping is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <h3 className={styles.productName}>{product.name}</h3>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <p>{product.description}</p>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <p>Cantidad: {product.quantity}</p>
              <button
                className={styles.button}
                onClick={() => removeFromCart(product)}
                aria-label={`Remove ${product.name} from cart`}
              >
                Delete From Cart
              </button>
            </div>
          ))
        )}
      </div>

      <div className={styles.clearButtonContainer}>
        <button
          className={styles.button}
          onClick={clearCart}
          aria-label="Clear all items from cart"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
