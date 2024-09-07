// import React from "react";
// import style from "./HeaderHambur.module.css";
// import { Link } from "react-scroll";
// import ProfileImage from "../../ProfileImage/ProfileImage";
// import CartIcon from "../../CartIcons/CartIcon";

// function MenuResponsive({Email, toggleFormulario, cerrarLogin}) {
//   return (
//     <>
//       <nav className={style.navigation}>
//         <Link to="electronics" smooth={true} duration={200}>
//           TECNOLOGIA
//         </Link>
//         <Link to="jewelery" smooth={true} duration={200}>
//           JOYERIA
//         </Link>
//         <Link to="mensclothing" smooth={true} duration={200}>
//           ROPA MASCULINA
//         </Link>
//         <Link to="womensclothing" smooth={true} duration={200}>
//           ROPA FEMENINA
//         </Link>
//       </nav>

//       <div className={style.buttons_navi}>
//         <div className="verCorreo">
//           {Email && <ProfileImage email={Email} />}
//         </div>

//         <button className="btn-ini-cerrarsesion" onClick={cerrarLogin}>
//           Cerrar Sesion
//         </button>

//         <button
//           className="btn-ini-sesion"
//           type="button"
//           onClick={toggleFormulario}
//         >
//           Iniciar Sesion
//         </button>

//         <div className="cart-icon-container">
//           <CartIcon />
//         </div>
//       </div>
//     </>
//   );
// }

// export default MenuResponsive;
