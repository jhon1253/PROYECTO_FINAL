import React, { useEffect, useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import RegisterForm from "../Register/Register";
import Login from "../Login/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../fireBase/credenciales";

function Header() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [Email, setEmail] = useState("");
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  // const toggleRegistro = () => {
  //   setMostrarRegistro(!mostrarRegistro);
  //   setMostrarFormulario(false);
  // };

  const cerrarLogin = async () => {
    try {
      await signOut(auth);
      console.log("sesion cerrada");
    } catch (error) {
      console.log("No cerro la sesion");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        console.log("Usuario no encontrado");
      }
    });
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
            {Email}
          </nav>

          {(mostrarFormulario || mostrarRegistro) && (
            <div className="formulario">
              {mostrarFormulario ? (
                // <form>
                //   <div className="campo">
                //     <label htmlFor="usuario">Email</label>
                //     <input type="text" id="usuario" name="usuario" />
                //   </div>

                //   <div className="campo">
                //     <label htmlFor="contrasena">Password</label>
                //     <input type="password" id="contrasena" name="contrasena" />
                //   </div>

                //   <button type="submit">Login</button>
                // </form>
                <Login></Login>
              ) : (
                <RegisterForm />
              )}
            </div>
          )}
        </div>
        <div className="flex flex-row">
          <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
            SIGNOUT
          </button>
          <button
            className="btn-ini-sesion"
            type="button"
            onClick={toggleFormulario}
          >
            LOGIN
          </button>
          <a href="/register">
            <button
              className="btn-ini-registro"
              type="button"
              // onClick={toggleRegistro}
            >
              SINGUP
            </button>
          </a>
          <div className="text-lg p-3 my-2 mx-20">
            <CartIcon />
          </div>

          <button className="" id="menu-btn-Hamburguesa">
            &#9776;
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
