import React from "react";
import Slider from "react-slick";
import Imagen from "../assets/mmmppp.png";
// import "../HomePage.module.css"
// import "../HomePage.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";



const settings = {
  centerMode: true,
  centerPadding: "0",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
};

export default function HomePage() {
  return (
    <>  
    <div className="header-princi flex items-center space-x-4">
      <img className="imagen-goku w-44" src={Imagen} alt="Logo" />
      <nav className="nav-menu">
        <ul className="nav-list flex space-x-4">
          <li className="nav-item text-white"><a href="/tienda" className="nav-link">Shop</a></li>
          <li className="nav-item text-white"><a href="/tienda/cart" className="nav-link">You Shopping Cart</a></li>
          <li className="nav-item text-white"><a href="/register" className="nav-link">Services</a></li>
          <li className="nav-item text-white"><a href="/login" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
      <div className="container ml-10 px-4 py-8"> 
          <Slider {...settings} className="carousel justify-center items-center">
            <div className="ml-40 ">
              <img src={img1} alt="Promoción 1" className="p-4 w-3/4 h-56 " />
            </div>
            <div className="ml-40 ">
              <img src={img2} alt="Promoción 2" className="p-4 w-3/4 h-56 " />
            </div>
            <div className="ml-40 ">
              <img src={img3} alt="Promoción 3" className="p-4 w-3/4 h-56 " />
            </div>
            <div className="ml-40 ">
              <img src={img4} alt="Promoción 4" className="p-4 w-3/4 h-56 " />
            </div>
            <div className="ml-40 ">
              <img src={img5} alt="Promoción 5" className="p-4 w-3/4 h-56 " />
            </div>
            <div className="ml-40 ">
              <img src={img6} alt="Promoción 6" className="p-4 w-3/4 h-56 " />
            </div>
          </Slider>
        
      </div>
    </>
  );
}
