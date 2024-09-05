import React from "react";

function headerHamburguesa () {

    
    return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <nav>
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
        </div>

        <div className="flex">
            <div className="buttons_header_responsive">
              <div className="verCorreo">
                {Email && <ProfileImage email={Email} />}
              </div>
              <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
                Cerrar Sesion
              </button>
              <button
                className="btn-ini-sesion" type="button" onClick={toggleFormulario}>
                Iniciar Sesion
              </button>
              <div className="cart-icon-container">
                <CartIcon />
              </div>
            </div>
          

          <button id="menu-btn-Hamburguesa" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </header>
    </div>
  )
}


export default headerHamburguesa;

