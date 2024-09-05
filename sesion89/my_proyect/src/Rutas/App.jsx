import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useFetch } from "../Hooks/useGetProducts";
import Header from "../components/Menu/Header";
import CartIcon from "../components/CartIcons/CartIcon";
import "../App.css"
import HomePage from "./HomePage";

export default function App() {
  const { data: electronics } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const { data: mensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );

  const { data: womensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  useEffect(() => {}, [electronics, jewelery, mensclothing, womensclothing]);

  return (
    <>
      <Header />

      <HomePage />

      <div className="search">
        <h1 className="title"><img src="/src/assets/cristal.png" alt="Logo" className="logo_esfera" />Kame Store</h1>
      </div>
      <div className="section" name="electronics">
        <h1 className="heading">Tecnología</h1>
        <div className="product-container">
          {electronics &&
            electronics.map((product, index) => (
              <Product key={index} {...product} />
            ))}
        </div>
      </div>
      <div className="section" name="jewelery">
        <h1 className="heading">Joyería</h1>
        <div className="product-container">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="section" name="mensclothing">
        <h1 className="heading">Ropa Masculina</h1>
        <div className="product-container">
          {mensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="section" name="womensclothing">
        <h1 className="heading">Ropa Femenina</h1>
        <div className="product-container">
          {womensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
