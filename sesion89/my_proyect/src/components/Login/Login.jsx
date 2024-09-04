import React, { useEffect, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import { useNavigate } from "react-router-dom";

const Login = ({ setMostrarFormulario }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para mostrar/ocultar la contraseña
  const [isVisible, setIsVisible] = useState(true); // Estado para manejar la visibilidad del login
  const [mostrarError, setMostrarError] = useState(null);
  const navigate = useNavigate();

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
      setMostrarError("Direccion o contraseña incorrecta", error);
      setTimeout(() => {
        setMostrarError("");
      }, 5000);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };
  const handleTiendaRedirect = () => {
    navigate("/");
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
                placeholder="nombre@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="textbox">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password_toggle_icon"
                onClick={() => setShowPassword(!showPassword)} // Cambia el estado al hacer clic
              >
                {showPassword ? (
                  <i class="bi bi-eye"></i>
                ) : (
                  <i class="bi bi-eye-slash"></i>
                )}{" "}
                {/* Alterna entre dos iconos de texto */}
              </span>
            </div>
            <button type="submit" onClick={handleTiendaRedirect} className="btn">
              Iniciar Sesión
            </button>
            {mostrarError && <p className="login-error">{mostrarError}</p>}

            <div className="create-account">
              <h3>¿Aun no tienes cuenta?</h3>
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
