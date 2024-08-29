import React, { useEffect, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import { useNavigate } from "react-router-dom";

const Login = ({ setMostrarFormulario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // Estado para manejar la visibilidad del login

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("Usuario no encontrado");
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Ingresaste a la cuenta");
    } catch (error) {
      console.log("Error al ingresar a la cuenta", error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleClose = () => {
    setMostrarFormulario((e) => !e);
    setIsVisible(false); // Oculta el componente de login
  };

  if (!isVisible) return null; // Si no es visible, no renderiza nada

  return (
    <div className="formularioee">
      <div className="login-container">
        <div className="login-box">
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="textbox">
              <input
                type="text"
                name="email"
                placeholder="name@gmail.com"
                value={email}
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
              Iniciar Sesión
            </button>
            <div className="create-account">
              <h3>¿No tienes cuenta?</h3>
              <button type="button" onClick={handleRegisterRedirect}>
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
