import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import { AuthContext } from '../../auth/authContext';
// import { types } from '../../types/types';

export const Navbar = () => {
  //   const {user,dispatch}=useContext(AuthContext);
  //   const navigate=useNavigate();

  //   const handleLogout=()=>{
  //     dispatch({type: types.logout});

  //     navigate('/login',{
  //       logged:true,
  //     });
  //   }

  return (
    <nav className="navbar-container">
      <Link to="/">Pokemones</Link>

      <Link to="ListaFavoritos">ListaFavoritos</Link>

      {/* 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span  className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button 
                        className="nav-item nav-link btn"    
                        onClick={handleLogout}                
                    >
                        Logout
                    </button>
                </ul>
            </div> */}
    </nav>
  );
};
