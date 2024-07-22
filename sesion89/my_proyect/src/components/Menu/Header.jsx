 import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";


function Header() {
  const [activo, setactivo] = useState(false);
  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img className="logo" src={Img} />
          <nav>
            <a href="#">Electronics</a>
            <a href="#">Jewelery</a>
            <a href="#">Men\'s Clothing</a>
            <a href="#">Women\'s Clothing</a>
            {activo && (
              <div className="">
                <h1>hola</h1>
              </div>
            )}
          </nav>
          <button onClick={() => setactivo(!activo)}>Inicia Sesion</button>
        </div>

        <button className="class-menu-btn" id="menu-btn">
          &#9776;
        </button>
      </header>
    </div>
  );
}

export default Header; // Aquí se exporta NetflixHeader como default

