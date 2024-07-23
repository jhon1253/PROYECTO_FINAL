import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useFetch } from "../Hooks/useGetProducts";
import Header from "../components/Menu/Header";

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

  return (
    <>
      <h1 className="titile-cabe">SHOPING</h1>
      <Header />
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error</p>} */}
      {}{" "}
      <div className="titulos" name="electronics">
        <h1>Electronics</h1>
        <div className="imagenes">
          {electronics.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="titulos1" name="jewelery">
        <h1>Jewelery</h1>
        <div className="imagenes1">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="titulos2" name="mensclothing">
        <h1>Mens Clothing</h1>
        <div className="imagenes2">
          {mensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="titulos3" name="womensclothing">
        <h1>Womens Clothing</h1>
        <div className="imagenes3">
          {womensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
}
