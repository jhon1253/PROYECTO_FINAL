import React, { useState } from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para mostrar/ocultar la contraseña
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false); // Nuevo estado para mostrar/ocultar la contraseña

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    else if (password < 8) {
      setError("La contraseña debe tener almenos 8 caracteres");
    } else {
      setError("");
    }
 
    try {
      const UsuarioCredenciales = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const User = UsuarioCredenciales.user;
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          uid_usuario: User.uid,
          correo_electronico: email,
          password,
        }),
      });
      alert("Usuario registrado satisfactoriamente");
      setEmail(""); // Limpiar el campo de email
      setPassword(""); // Limpiar el campo de contraseña
    } catch (error) {
      console.log("Error al crear cuenta", error);
    }
  };

  return (
    <div className="container_register">
      <form onSubmit={handleSubmit} className="from_login">
        <label htmlFor="name" className="title_label">
          Nombre y Apellido:
        </label>
        <input
          placeholder="Nombre y Apellido"
          required
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="input_login"
        />
        <label htmlFor="email" className="title_label">
          Correo:
        </label>
        <input
          placeholder="nombre@gmail.com"
          required
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input_login"
        />
        <br />

        <label htmlFor="password" className="title_label">
          Contraseña:
        </label>
        <div className="password-container">
          <input
            placeholder="********"
            required
            type={showPassword ? "text" : "password"} // Alterna el tipo del input
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input_login"
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)} // Cambia el estado al hacer clic
          >
            {showPassword ? (
              <i class="bi bi-eye-slash"></i>
            ) : (
              <i class="bi bi-eye"></i>
            )}{" "}
            {/* Alterna entre dos iconos de texto */}
          </span>
        </div>

        <label htmlFor="confirm-password" className="login-label">
          Confirmar Contraseña:
        </label>
        <div className="password-container">
          <input
            placeholder="********"
            required
            type={showPasswordConfirm ? "text" : "password"}
            id="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="input_login "
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} // Cambia el estado al hacer clic
          >
            {showPasswordConfirm ? (
              <i class="bi bi-eye-slash"></i>
            ) : (
              <i class="bi bi-eye"></i>
            )}{" "}
            {/* Alterna entre dos iconos de texto */}
          </span>
        </div>

        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login_button">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
