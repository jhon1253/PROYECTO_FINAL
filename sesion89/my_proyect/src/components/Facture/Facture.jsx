import React, { useState } from "react";
import styles from "./Facture.module.css";

const Facture = () => {
  const [formData, setFormData] = useState({
    estado_factura: "",
    fecha_pedido: "",
    id_usuario: "",
    id_producto: "",
    precio_total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/facturas",
        formData
      );
      console.log("Factura creada:", response.data);
    } catch (error) {
      console.error("Error al crear la factura:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="estado_factura"
        placeholder="Estado de la factura"
        onChange={handleChange}
        required
      />
      <input type="date" name="fecha_pedido" onChange={handleChange} required />
      <input
        type="text"
        name="id_usuario"
        placeholder="ID de Usuario"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="id_producto"
        placeholder="ID de Producto"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precio_total"
        placeholder="Precio Total"
        onChange={handleChange}
        required
      />
      <button type="submit">Crear Factura</button>
    </form>
  );
};

export default Facture;
