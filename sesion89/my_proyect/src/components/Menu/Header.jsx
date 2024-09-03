import React, { useEffect, useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import RegisterForm from "../Register/Register";
import Login from "../Login/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";
import ProfileImage from "../ProfileImage/ProfileImage";

function Header() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [Email, setEmail] = useState("");
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const cerrarLogin = async () => {
    try {
      await signOut(auth);
      setEmail(""); // Limpia el estado de email al cerrar sesión
      console.log("Sesión cerrada con éxito");
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
  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img className="hover:animate-bounce" src={Img} alt="Logo" />
          <nav>
            <Link to="electronics" smooth={true} duration={200}>
              ELECTRONICS
            </Link>
            <Link to="jewelery" smooth={true} duration={200}>
              JEWELERY
            </Link>
            <Link to="mensclothing" smooth={true} duration={200}>
              MEN'S CLOTHING
            </Link>
            <Link to="womensclothing" smooth={true} duration={200}>
              WOMEN'S CLOTHING
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
          <div className="buttons_header">
            <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
              SIGNOUT
            </button>
            <button
              className="btn-ini-sesion"
              type="button"
              onClick={toggleFormulario}
            >
              SIGNIN
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
          <button id="menu-btn-Hamburguesa">&#9776;</button>
          <div className="verCorreo">
            {Email && <ProfileImage email={Email} />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
