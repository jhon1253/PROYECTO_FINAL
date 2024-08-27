import React from "react";
import Slider from "react-slick";
import Header from "../components/Menu/Header";
// import "../HomePage.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import HEader from "../components/Menu/Header";


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
    <div className="container mx-auto px-4 py-8"> {/* Ejemplo con clases de Tailwind */}
      <Slider {...settings} className="carousel">
        <div className="p-4">
          <img src={img1} alt="Promoción 1" className="w-full h-56 " />
        </div>
        <div className="p-4">
          <img src={img2} alt="Promoción 2" className="w-full h-56 " />
        </div>
        <div className="p-4">
          <img src={img3} alt="Promoción 3" className="w-full h-56 " />
        </div>
        <div className="p-4">
          <img src={img4} alt="Promoción 4" className="w-full h-56 " />
        </div>
        <div className="p-4">
          <img src={img5} alt="Promoción 5" className="w-full h-56 " />
        </div>
        <div className="p-4">
          <img src={img6} alt="Promoción 6" className="w-full h-56 " />
        </div>
      </Slider>
      <HEader buttons={false}/>
    </div>
  );
}
