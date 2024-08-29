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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
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
    <div className="formulario">
      <div className="container-register">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="name" className="login-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="login-input"
          />
          <br />
          <label htmlFor="surname" className="login-label">
            LastName:
          </label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            className="login-input"
          />
          <br />
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="login-input"
          />
          <br />
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="login-input"
          />
          <br />
          <label htmlFor="confirm-password" className="login-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="login-input"
          />
          <br />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Sing Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
