import React from "react";
import styles from "./Confirmation.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/mmmppp.png";


const ConfirmationPage = () => {
  const navigate = useNavigate(); 

  
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <FaCheckCircle className={styles.icon} />
      <h1>¡Compra Confirmada!</h1>
      <img src={Img} alt="Logo" />

      <p>Gracias por tu compra.</p>

      <button className={styles.button} onClick={handleGoHome}>
        Volver a la Página Principal
      </button>
    </div>
  );
};

export default ConfirmationPage;
