import React from "react";
import styles from "./Purchase.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Purchase = () => {
  return (
    <div className={styles.container}>
      <h1>Procesando Pago</h1>
      <p>
        Gracias por tu compra. Hemos recibido tu pedido y estamos procesándolo.
      </p>
      <p>
        Por favor, espere un momento...
      </p>
      <AiOutlineLoading3Quarters className={styles.icon} />
      <img
        src="/src/assets/image.png" 
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

export default Purchase;
