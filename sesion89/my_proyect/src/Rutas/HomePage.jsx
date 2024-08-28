import React from "react";
import Slider from "react-slick";
import Imagen from "../assets/mmmppp.png";
import "../HomePage.css"; // Asegúrate de que la ruta sea correcta

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
      {/* <div className="header-princi">
        <img className="imagen-goku" src={Imagen} alt="Logo" />
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/tienda" className="nav-link">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a href="/tienda/cart" className="nav-link">
                You Shopping Cart
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="container">
        <Slider {...settings} className="carousel">
          <div>
            <img src={img1} alt="Promoción 1" />
          </div>
          <div>
            <img src={img2} alt="Promoción 2" />
          </div>
          <div>
            <img src={img3} alt="Promoción 3" />
          </div>
          <div>
            <img src={img4} alt="Promoción 4" />
          </div>
          <div>
            <img src={img5} alt="Promoción 5" />
          </div>
          <div>
            <img src={img6} alt="Promoción 6" />
          </div>
        </Slider>
      </div>
    </>
  );
}
