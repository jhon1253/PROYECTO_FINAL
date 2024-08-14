import React, { useContext } from "react";
import { products } from "../products";
import { CartContext } from "../context/CartContext";
import styles from "./ProductList.module.css"; // Importa el CSS module

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div className={styles.productContainer} key={product.id}>
          <h2 className={styles.productTitle}>{product.name}</h2>
          {/* <img src={product.image} alt={product.title} /> */}
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>{product.price}</p>
          <button
            className={styles.addButton}
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
