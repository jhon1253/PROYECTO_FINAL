import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";

function Header() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

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

          {mostrarFormulario && (
            <div className="formulario">
              <form>
                <div className="campo">
                  <label htmlFor="usuario">Email</label>
                  <input type="text" id="usuario" name="usuario" />
                </div>

                <div className="campo">
                  <label htmlFor="contrasena">Password</label>
                  <input type="password" id="contrasena" name="contrasena" />
                </div>

                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </div>
        <div className="flex flex-row">
          <button
            className="btn-ini-sesion"
            type="button"
            onClick={toggleFormulario}
          >
            Login
          </button>
          <div className="text-lg  p-3 my-2 mx-20 ">
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
