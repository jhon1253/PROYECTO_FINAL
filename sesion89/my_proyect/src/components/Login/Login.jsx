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
  const [registrar, setRegistrar] = useState(false);
  const [visible, setVisible] = useState(true); // Estado para manejar la visibilidad del formulario

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
      const User = UsuarioCredenciales.user;
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

  const IngresarUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, Email, password);
      console.log("Ingresaste a la cuenta");
    } catch (error) {
      console.log("Error al ingresar a la cuenta", error);
    }
  };

  return (
    <>
      {visible && (
        <div className="login-container">
          <div className="login-box">
            <h2>{registrar ? "Crear Cuenta" : "Iniciar Sesión"}</h2>
            <form
              onSubmit={(e) => (registrar ? RegisterUser(e) : IngresarUser(e))}
            >
              <div className="textbox">
                <input
                  type="text"
                  name="email"
                  placeholder="name@gmail.com"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  
                />
              </div>
              <div className="textbox">
                <input
                  type="password"
                  name="password"
                  placeholder="password(8 dig-min)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  
                />
              </div>
              <button type="submit" className="btn">
                {registrar ? "Crear Cuenta" : "Iniciar Sesión"}
              </button>
              <div className="crearCuenta">
                <h4>¿No tienes cuenta aún?</h4>
              </div>
              <button type="button" onClick={() => setRegistrar(!registrar)}>
                {registrar ? " ¿Quieres Ingresar?" : "Crear cuenta"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
