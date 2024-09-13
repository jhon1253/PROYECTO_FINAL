import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import RegisterForm from "../Register/Register";
import Login from "../Login/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import ProfileImage from "../ProfileImage/ProfileImage";
import { CartContext } from "../context/CartContext";

function Header() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarRegistro] = useState(false);
  const [Email, setEmail] = useState("");
  const {clearCart} = useContext(CartContext)
  const [menuAbierto, setMenuAbierto] = useState(false); // Estado para el menú hamburguesa
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const cerrarLogin = async () => {
    try {
      await signOut(auth);
      setEmail(""); // Limpia el estado de email al cerrar sesión
      console.log("Sesión cerrada con éxito");
      clearCart();
    } catch (error) {
      console.log("No cerro la sesion");
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail("");
        console.log("Usuario no encontrado");
      }
    });
    // Limpia la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img  src={Img} alt="Logo" />
          <nav className={menuAbierto ? "navbar active" : "navbar"}>
            <Link to="electronics" smooth={true} duration={200}>
              TECNOLOGIA
            </Link>
            <Link to="jewelery" smooth={true} duration={200}>
              JOYERIA
            </Link>
            <Link to="mensclothing" smooth={true} duration={200}>
              ROPA MASCULINA
            </Link>
            <Link to="womensclothing" smooth={true} duration={200}>
              ROPA FEMENINA
            </Link>
          </nav>

          {(mostrarFormulario || mostrarRegistro) && (
            <div>
              {mostrarFormulario ? (
                <Login setMostrarFormulario={setMostrarFormulario} />
              ) : (
                <RegisterForm />
              )}
            </div>
          )}
        </div>

        <div className="flex">
          {menuAbierto ? (
            <div className="buttons_header_responsive">
              <div className="verCorreo">
                {Email && <ProfileImage email={Email} />}
              </div>
              <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
                Cerrar Sesion
              </button>
              <button
                className="btn-ini-sesion"
                type="button"
                onClick={toggleFormulario}
              >
                Iniciar Sesion
              </button>
              <div className="cart-icon-container">
                <CartIcon />
              </div>
            </div>
          ) : (
            <div className="buttons_header">
              <div className="verCorreo">
                {Email && <ProfileImage email={Email} />}
              </div>
              <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
                Cerrar Sesion
              </button>
              <button
                className="btn-ini-sesion"
                type="button"
                onClick={toggleFormulario}
              >
                Iniciar Sesion
              </button>
              {/* <a href="/register">
                <button className="btn-ini-registro" type="button">
                  SINGUP
                </button>
              </a> */}
              <div className="cart-icon-container">
                <CartIcon />
              </div>
            </div>
          )}
          <button id="menu-btn-Hamburguesa" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
