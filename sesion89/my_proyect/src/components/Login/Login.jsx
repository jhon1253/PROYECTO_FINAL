import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Login = ({ setMostrarFormulario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mostrarError, setMostrarError] = useState(null);
  const { startCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Si el usuario está autenticado, ocultar el formulario y redirigir a la página principal
        setIsVisible(false);
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const Cart = await fetch(
        `http://localhost:3000/carrito/${resp.user.uid}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => res.json());
      startCart(Cart);
      console.log("Ingresaste a la cuenta");
    } catch (error) {
      setMostrarError("Dirección o contraseña incorrecta.");
      setTimeout(() => {
        setMostrarError(null);
      }, 5000);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleClose = () => {
    setMostrarFormulario(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

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
                type="email"
                name="name"
                placeholder="nombre@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="textbox">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password_toggle_icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="bi bi-eye"></i>
                ) : (
                  <i className="bi bi-eye-slash"></i>
                )}
              </span>
            </div>
            <button type="submit" className="btn">
              Iniciar Sesión
            </button>
            {mostrarError && <p className="login-error">{mostrarError}</p>}
            <div className="create-account">
              <h3>¿Aún no tienes cuenta?</h3>
              <h5>Crea tu cuenta yaa !!</h5>
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
