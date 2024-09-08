import React from "react";
import styles from "./Purchase.module.css"

const purchase = () => {

    return (
      <div className={styles.container}>
        <h1>Procesando Pago</h1>
        <img
          src="/src/assets/purchase.png" // Asegúrate de tener esta imagen en la carpeta public/images
          alt="Processing Payment"
          className={styles.image}
        />
        <p>Estamos procesando su pago. Por favor, espere un momento.</p>
        <img
          src="/src/assets/carrito_compra.png" // Asegúrate de tener esta imagen en la carpeta public/images
          alt="Processing Payment"
          className={styles.carrito_compra}
        />
        <p>
          Una vez completado el proceso, le redirigiremos automáticamente a la
          página de confirmación.
        </p>
      </div>
    );
};

export default purchase;