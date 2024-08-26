import React, { useEffect, useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../fireBase/credenciales";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        console.log("Usuario no encontrado");
      }
    });
  }, []);

  const RegisterUser = async (e) => {
    e.preventDefault();

    try {
      const UsuarioCredenciales = await createUserWithEmailAndPassword(
        auth,
        Email,
        password
      );
      const User = UsuarioCredenciales.user
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid_usuario: User.uid,
          correo_electronico: Email,
        }),
      });
    } catch (error) {
      console.log("Error al crear cuenta", error);
    }
  };

  const [registrar, setRegistrar] = useState(false);
  const IngresarUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, Email, password);
      console.log("Ingresaste a la cuenta");
    } catch (error) {
      console.log("Error al ingresar a la cuenta", error);
    }
  };
  console.log(users);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesion</h2>
        <form onSubmit={(e) => (registrar ? RegisterUser(e) : IngresarUser(e))}>
          <div className="textbox">
            <input
              type="text"
              placeholder="name@gmail.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="password(8 dig-min)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Iniciar Sesion
          </button>
          <button onClick={() => setRegistrar(!registrar)}>
            {registrar ? " ¿Quieres Ingresar?" : "¿Quieres Registrate?"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
